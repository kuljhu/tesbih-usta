// Root layout — next-intl middleware handles locale routing.
// All actual content lives in src/app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
