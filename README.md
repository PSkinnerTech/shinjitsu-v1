# Intuition Next.js App Template

Welcome Fren!

So, you're part of the exclusive Intuition Alpha Cohort? That's awesome! This Next.js App Template is specially crafted just for you. We know how tedious and time-consuming it can be to set up authentication from scratch. That's why we've got you covered. With this template, you can skip the boring part and dive straight into building the core functionality of your app. After all, isn't that why we all got into coding? To create cool sh\*t!

## Summary

This Intuition Next.js App Template is your golden ticket to a smooth start with your Intuition project. Here's why:

- **Alpha Access**: First things first, this isn't for everyone. You've got to be part of the Intuition Alpha Cohort to use this application. Your API Key is like a VIP pass to a hackathon party where everyone is awkwardly standing in the corner with their laptop.

- **Authentication Ready**: We've integrated Next-Auth and set it up for Intuition's closed alpha. This means your app will have authentication using DID Session authorization and an API key. And guess what? If your wallet connects and is part of our elite cohort, the API key fetches itself. **magic ✨**

- **Focus on What Matters**: With authentication out of the way, you can channel all your energy and creativity into building the unique features of your app. We handled the nitty-gritty, so you don't have to.

## Getting Started

1. Prerequisites:

Node.js: Before anything else, ensure you have Node.js installed. Given that Next.js 13 requires a minimum Node.js version of 16.14.0, make sure you're up-to-date. If you're still on 12.x or 14.x, it's time for an upgrade my g.

2. Fork the Repository:

Instead of just cloning, we'd love for you to fork the repository. This way, we can keep track of the amazing things you're building and be part of your journey. Head over to the repository and click on the "Fork" button. Once forked, you can clone your forked repo to your local machine:

```bash
git clone [YOUR-FORKED-REPO-URL]
```

3. Install Dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Environment Setup:
   Setting up your environment is like giving your app its own personal space. Here's how you can do it:

- **NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID**: This lets users connect their wallets with rainbowkit via WalletConnect. Unsure about it? No stress! Follow this [tutorial](https://docs.walletconnect.com/2.0/cloud/explorer#setting-up-a-new-project).

- **NEXT_PUBLIC_ALCHEMY_API_KEY**: To sync up with chains using wagmi's Alchemy provider, you'll need this. Specifically, an Arbitrum Goerli Alchemy API key. Unsure where to start? Check out this [tutorial](https://docs.alchemy.com/docs/alchemy-quickstart-guide).

- **NEXTAUTH_URL**: Required for [next-auth](https://next-auth.js.org/getting-started/introduction). Running locally? It's preset to http://localhost:3000. But if you're taking your app to the big stage, update this to your website's address.

- **NEXTAUTH_SECRET**: Required for [next-auth](https://next-auth.js.org/getting-started/introduction). Think of it as your app's secret handshake. Whip one up with `openssl rand -base64 32`. For the curious, here's the [Next-Auth documentation](https://next-auth.js.org/getting-started/example).

At this point, your `.env.local` file should look something like this:

```bash
NEXT_PUBLIC_ALCHEMY_API_KEY=REPLACE_ME
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=REPLACE_ME

# next-auth authentication url
NEXTAUTH_URL=http://localhost:3000
# openssl rand -base64 32
NEXTAUTH_SECRET=WwrFzRazSs4LjV9XEXymW/XsukYTSWpSCKdiB7MNWr0=
```

Now you are fully moisturized, in your lane, and ready to dev on Intuition! LFG.

5. Run the Development Server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Intuition, take a look at the following resources:

- [Intuition Documentation]() - Discover the fundamental mechanics of Intuition through our documentation.
- [Getting Started]() - Reference this quick guide to use our API to create claims, make attestations, and query knowledge.
- [Contact Us]() - Need help? Having trouble authenticating? Get support from the Intuition team.
