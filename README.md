# EduCred Base

Verifiable Education Credentials on Base & Farcaster

## Overview

EduCred Base is a decentralized application for educational institutions to issue immutable, verifiable digital degrees and certifications as non-transferable NFTs on Base. Students can showcase their achievements on Farcaster, and employers can verify credentials instantly.

## Features

- **Immutable Credential Issuance**: Educational institutions mint non-transferable NFTs representing degrees, certifications, or course completions
- **On-Demand Verification**: Instant verification of credentials via QR code or Basename/FID
- **Social Showcase**: Display verified credentials as badges on Farcaster profiles
- **Skill Endorsements**: Build a trusted professional network based on verified skills

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Identity**: OnchainKit for Base identity and Basename resolution
- **Social**: Farcaster Mini Apps with MiniKit
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Home page
├── issue/                  # Issue credentials page
├── credentials/            # View credentials page
├── verify/                 # Verify credentials page
├── endorsements/           # Skill endorsements page
└── components/
    └── Providers.tsx       # OnchainKit + React Query providers

public/
└── .well-known/
    └── farcaster.json      # Farcaster Mini App manifest
```

## Key Components

- **OnchainKitProvider**: Provides Base blockchain integration
- **CredentialCard**: Displays individual credentials
- **VerificationResult**: Shows credential verification status
- **EndorsementCard**: Displays skill endorsements

## Base Mini App Integration

This app is built as a Farcaster Mini App with:
- Manifest at `/.well-known/farcaster.json`
- OnchainKit for wallet and identity
- MiniKit for Farcaster social features
- BASE theme with dark blue background and #0052ff accents

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key from Coinbase Developer Platform
- `NEXT_PUBLIC_CHAIN_ID`: Base chain ID (8453 for mainnet, 84532 for testnet)
- `NEXT_PUBLIC_RPC_URL`: Base RPC endpoint

## Deployment

Deploy to Vercel or any Next.js-compatible hosting:

```bash
npm run build
npm start
```

## License

MIT
