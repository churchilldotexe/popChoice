# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

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

- nextJs - [T3 Stack](https://create.t3.gg/)
- openAI - [openAi api docs](https://platform.openai.com/docs/introduction)
