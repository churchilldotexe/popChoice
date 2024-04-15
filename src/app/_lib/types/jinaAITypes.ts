type Embedding = {
  object: string;
  index: number;
  embedding: string[];
};

type Usage = {
  total_tokens: number;
  prompt_tokens: number;
};

export type EmbeddingsList = {
  model: string;
  object: string;
  usage: Usage;
  data: Embedding[];
};
