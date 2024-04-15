"use server";

import { type EmbeddingsList } from "@/app/_lib/types/jinaAITypes";
import type { Database } from "@/app/_lib/types/supabase";
import { env } from "@/env";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
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

export async function createMovieRecom(prevState: formState, formData: FormData): Promise<formState> {
  const usersQuery = formSchema.safeParse(Object.fromEntries(formData));
  const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_API_KEY);
  const url = "https://api.jina.ai/v1/embeddings";

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
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(inputData),
    });
    const embeddedData = (await response.json()) as EmbeddingsList;

    if (!response.ok) {
      console.error(response.status, response.statusText);
      return { message: `Error:${response.status} - unable to connect to DB. ${response.statusText}` };
    }

    const vectorCoord = embeddedData?.data[0]?.embedding;

    if (vectorCoord === undefined) {
      return { error: "Unable to get a movie from database" };
    }
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
  } catch (error) {
    console.error(error);
    return { error: "Unable to get a movie." };
  }

  // console.log(usersQuery.data);

  redirect("/recommendation");
  return { message: "success" };
}
