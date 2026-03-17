import { defineCollection } from "astro:content";
import { z } from "zod";

function orderFromPosition<T extends {}>(entries: T[]) {
  return entries.map((entry, i) => Object.assign(entry, { order: i }));
}

const projects = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    defunct: z.boolean().default(false),
    link: z.object({
      href: z.url(),
      label: z.string(),
    }),
    icon: z.discriminatedUnion("type", [
      z.object({ type: z.literal("url"), url: z.url() }),
      z.object({ type: z.literal("string"), string: z.string() }),
      z.object({ type: z.literal("favicon"), domain: z.string() }),
    ]),
    order: z.number(),
  }),
  loader: () =>
    orderFromPosition([
      {
        id: "defunct.net",
        name: "defunct.net",
        description:
          "Don't leave domains unresolved. Free landing pages and email inboxes for unused domains.",
        link: {
          label: "defunct.net",
          href: "https://defunct.net",
        },
        icon: {
          type: "favicon",
          domain: "defunct.net",
        },
      },
      {
        id: "yea.net",
        name: "yea.net",
        icon: {
          type: "favicon",
          domain: "yea.net",
        },
        description:
          "Yea.net replaces the theory of domain name valuation with practice. Every domain's Yea! Value™ is just a click away from being money in an account.",
        link: {
          label: "yea.net",
          href: "https://yea.net",
        },
      },
      {
        id: "e.ml",
        name: "e.ml",
        icon: {
          type: "favicon",
          domain: "e.ml",
        },
        description:
          "A free inbrowser inbox for inspecting .eml files. Private and secure, read and inspect local and remote emails on mobile and desktop.",
        link: {
          label: "e.ml",
          href: "https://e.ml",
        },
      },
      {
        id: "milliondollarchat",
        name: "Million Dollar Chat",
        icon: {
          type: "url",
          url: "https://milliondollarchat.com/icon.png",
        },
        description:
          "A reimagining of the Million Dollar Homepage for the AI age. Chat with a million dollars of shared context and add your own for $1 per character.",
        link: {
          label: "milliondollarchat.com",
          href: "https://milliondollarchat.com",
        },
      },
      {
        id: "funflair",
        name: "Funflair",
        icon: {
          type: "favicon",
          domain: "reddit.com",
        },
        description:
          "Make Reddit flair more fun with emojis, text, categories, options, karma limits, account age requirements and more.",
        link: {
          href: "https://developers.reddit.com/apps/funflair",
          label: "reddit.com/apps/funflair",
        },
      },
      {
        id: "dnwk.com",
        name: "dnwk.com",
        icon: {
          type: "favicon",
          domain: "dnwk.com",
        },
        description: "A collection of free domain name APIs.",
        link: {
          label: "dnwk.com",
          href: "https://dnwk.com",
        },
      },
      {
        id: "unread.net",
        name: "unread.net",
        icon: {
          type: "favicon",
          domain: "unread.net",
        },
        description:
          "Don't leave emails unread. Unlimited email inboxes for unlimited email addresses at unlimited domains.",
        link: {
          label: "unread.net",
          href: "https://unread.net",
        },
      },
      {
        id: "tofu.net",
        name: "tofu.net",
        icon: {
          type: "favicon",
          domain: "tofu.net",
        },
        description: "tofu.net is being pressed.",
        link: {
          label: "tofu.net",
          href: "https://tofu.net",
        },
      },
      {
        id: "prompt/handles-server",
        name: "prompt/handles-server",
        icon: {
          type: "string",
          string: "🦋",
        },
        description:
          "Open source Bluesky handle verification server powering thousands of handles.",
        link: {
          label: "github.com/prompt/handles-server",
          href: "https://github.com/prompt/handles-server",
        },
      },
      {
        id: "prompt/actions-assert",
        name: "prompt/actions-assert",
        icon: {
          type: "string",
          string: "🚦",
        },

        description:
          "Assert actual is expected in GitHub Workflows — designed for GitHub Action integration tests and robust build pipelines.",
        link: {
          label: "github.com/prompt/actions-assert",
          href: "https://github.com/prompt/actions-assert",
        },
      },
      {
        id: "prompt/actions-commit-hash",
        name: "prompt/actions-commit-hash",
        icon: {
          type: "string",
          string: "🏷️",
        },
        description:
          "A GitHub Action to output commit hash (short and long) with an optional prefix in a Workflow.",
        link: {
          label: "github.com/prompt/actions-commit-hash",
          href: "https://github.com/prompt/actions-commit-hash",
        },
      },
      {
        id: "shrink/actions-docker-extract",
        name: "shrink/actions-docker-extract",
        icon: {
          type: "string",
          string: "🗃️",
        },
        description:
          "A GitHub Action for extracting file(s) from Docker Image(s) in Workflows.",
        link: {
          label: "github.com/shrink/actions-docker-extract",
          href: "https://github.com/shrink/actions-docker-extract",
        },
      },
      {
        id: "prompt/actions-semver-aliases",
        name: "prompt/actions-semver-aliases",
        icon: {
          type: "string",
          string: "👯",
        },
        description:
          "A GitHub Action to generate major and minor Semantic Version aliases from a Semantic Version.",
        link: {
          label: "github.com/prompt/actions-semver-aliases",
          href: "https://github.com/prompt/actions-semver-aliases",
        },
      },
      {
        id: "shrink/actions-docker-registry-tag",
        name: "shrink/actions-docker-registry-tag",
        icon: {
          type: "string",
          string: "🐳",
        },
        description:
          "A GitHub Action to add many tags to an image in a Docker Registry.",
        link: {
          label: "github.com/shrink/actions-docker-registry-tag",
          href: "https://github.com/shrink/actions-docker-registry-tag",
        },
      },
      {
        id: "shr-ink/shr.ink",
        name: "shr-ink/shr.ink",
        icon: {
          type: "string",
          string: "🦑",
        },
        description: "A little website for a little company.",
        link: {
          label: "github.com/shr-ink/shr.ink",
          href: "https://github.com/shr-ink/shr.ink",
        },
      },
      {
        id: "handles.net",
        name: "handles.net",
        defunct: true,
        icon: {
          type: "favicon",
          domain: "handles.net",
        },
        description:
          "Handles.net was a service to manage and provision Bluesky handles for your team, community or group.",
        link: {
          label: "handles.net",
          href: "https://handles.net",
        },
      },
      {
        id: "is.now",
        name: "is.now",
        defunct: true,
        icon: {
          type: "favicon",
          domain: "is.now",
        },
        description: "A domain for your now page.",
        link: {
          label: "is.now",
          href: "https://is.now",
        },
      },
    ]),
});

export const collections = { projects };
