"use server";

import { messages } from "@/app/_lib/lib";
import { type EmbeddingsList } from "@/app/_lib/types/jinaAITypes";
import type { Database } from "@/app/_lib/types/supabase";
import { env } from "@/env";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import OpenAI from "openai";

import { z } from "zod";

const formSchema = z.object({
  mood: z.string(),
  timeline: z.string(),
  favorite: z.string(),
});

export type formState = {
  message?: string;
  error?: string;
};

export async function createMovieRecommendation(prevState: formState, formData: FormData): Promise<formState> {
  const usersQuery = formSchema.safeParse(Object.fromEntries(formData));
  const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_API_KEY);
  const url = env.JINAAI_URL;
  const openAi = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });
  const movieRecom: Array<{
    title?: string;
    summary?: string;
  }> = [];

  //ensuring form is correctly parsed
  if (!usersQuery.success) {
    return { error: "Form data invalid" };
  }

  const { favorite, mood, timeline } = usersQuery.data;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${env.JINA_AI_API_KEY}`,
  };

  const inputData = {
    input: [`favorite:${favorite}, timeline:${timeline}, mood:${mood}`],
    model: "jina-embeddings-v2-base-en",
  };

  try {
    // POST req for embeddings data from JinaAi
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(inputData),
    });
    const embeddedData = (await response.json()) as EmbeddingsList;

    // catching error for embedding data
    if (!response.ok) {
      console.error(response.status, response.statusText);
      return { message: `Error:${response.status} - unable to connect to DB. ${response.statusText}` };
    }

    const vectorCoord = embeddedData?.data[0]?.embedding;

    // similarity search function from supabase
    const { data, error } = await supabase.rpc("match_movies", {
      //@ts-expect-error tested: database requires strings[] instead of string
      query_embedding: vectorCoord,
      match_threshold: 0.5,
      match_count: 1,
    });

    if (error !== null) {
      console.error(error);
      return { error: "Unable to get a movie from database" };
    }

    console.log(data);

    messages.push({
      role: "user",
      content: `context:${data[0]?.content}, question: What movie should i watch if my favorite was ${favorite} ? the timeline that i want to watch is ${timeline} and i want something ${mood} `,
    });

    //using openAI to prompt for feature: Humanly UI response
    const chatResponse = await openAi.chat.completions.create({
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
      messages,
      temperature: 0.65,
      frequency_penalty: 0.5,
    });

    if (chatResponse?.choices[0]?.message.content === null) {
      return { error: "Unable to your movie. Please try again" };
    }
    const { summary, title } = JSON.parse(chatResponse.choices[0]!.message.content) as {
      title: string;
      summary: string;
    };
    messages.push(chatResponse.choices[0]!.message);
    movieRecom.push({ title, summary });
  } catch (error) {
    console.error(error);
    return { error: "Unable to get a movie." };
  }
  redirect(`./recommendation?t=${movieRecom[0]!.title}&s=${movieRecom[0]!.summary}`);
  return { message: "success" };
}
