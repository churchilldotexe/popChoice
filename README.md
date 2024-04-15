# PopChoice

An Ai movie recommendation for you to enjoy!

[![popcorn logo](/public/popChoice.svg)](https://pop-choice-ten.vercel.app/)

## TODO

- [x] create homepage and recommendation page
- [x] mock data
- [x] handle form with server action
- [x] connect db perform pg vector search with the query
- [] connect openAI chat completion
- [] push response to an array
- [] get response via json passed it in as a query in the link (try to make link props)
- [] handle loading state in both pages (skeleton loading)
- []
- []
- []

to start:

```
nvm use
pnpm install

pnpm run dev
```

Note:

- node is locked at 18.0.0 or higher
- pnpm is locked at 4.0.2 or higher

```
"node": ">=18.0.0",
"pnpm": ">=4.0.2"
```

##### lint staged:

##### about commits:

    commits is following the [conventional commits](https://www.npmjs.com/package/@commitlint/
    config-conventional) where you can only pass the values:

(case sensitive)

```
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
```

example:

```
echo "foo: some message" # fails
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

stacks used:

- [Next.js](https://nextjs.org) - [T3 Stack](https://create.t3.gg/)
- openAI - [openAi api docs](https://platform.openai.com/docs/introduction)
- JinaAI - for embeddings. [docs](https://jina.ai/embeddings/#apiform)
- supabase - for Database and Semantic Search. [Storing OpenAI in Postgres with pgvector](https://supabase.com/blog/openai-embeddings-postgres-vector)
- [Tailwind CSS](https://tailwindcss.com)
