# Crypto Checkout - Frontend Assessment

A responsive crypto checkout experience built with Next.js, TypeScript, and Tailwind CSS. This project implements a clean, production-ready interface for converting cryptocurrency to cash.

## 🚀 Live Demo

- **Deployed Application**: https://nova-crust-assessment.vercel.app/

## 🎯 Implemented Features

### Pages Implemented
1. **Crypto to Cash Conversion Page** - Main conversion interface with currency selection
2. **Cash to Crypto Coming Soon Page** - Email capture page for upcoming feature

### Key Features
- ✅ Fully responsive design (mobile-first approach)
- ✅ Interactive currency/crypto dropdowns with search functionality
- ✅ Wallet connection selection
- ✅ Real-time form state management
- ✅ Smooth transitions and hover states
- ✅ Accessible UI components using Radix UI primitives
- ✅ Clean component architecture
- ✅ TypeScript for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)


## 🚀 Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PerryAlex-hub/NovaCrust-assessment.git
   
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Add currency/wallet icons**
   
   Place the following images in `public/images/`:
   - `CELO.png`, `ETH.png`, `TON.png`, `BNB.png` (crypto icons)
   - `NGN.png`, `USD.png`, `EUR.png`, `GBP.png` (currency flags)
   - `metamask.png`, `rainbow.png`, `walletconnect.png`, `wallet.png` (wallet icons)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design Decisions & Trade-offs

### Component Architecture
- **Reusable Components**: Created separate dropdown components (`SelectPay`, `SelectReceive`, `WalletSelect`) that can be reused across the application
- **Composition Pattern**: Used Radix UI primitives for accessibility and composability
- **Single Responsibility**: Each component has a clear, focused purpose

### Styling Approach
- **Tailwind CSS**: Chosen for rapid development and consistent design system
- **Mobile-First**: All components designed for mobile first, then scaled up
- **Custom Utilities**: Added `scrollbar-hide` utility for cleaner horizontal scroll on mobile

### State Management
- **Local State**: Used React hooks for form state (adequate for this scope)
- **No Global State**: Avoided Redux/Zustand as complexity wasn't needed
- **Future Consideration**: For production, would add context for shared state

### Responsive Design
- **Breakpoints**: 
  - Mobile: < 640px (default)
  - Tablet: 640px - 1023px (sm:)
  - Desktop: 1024px+ (lg:)
- **Stack vs Flex**: Inputs stack on mobile, side-by-side on desktop
- **Touch Targets**: All interactive elements meet 44px minimum for mobile

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Focus states on all interactive elements
- ✅ Sufficient color contrast

## 👤 Author

**Nwokedi Ifechukwu**
- GitHub: PerryAlex-hub
