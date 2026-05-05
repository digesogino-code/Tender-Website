import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tender — Diamond Marketplace',
  description: 'Buy, sell & trade certified diamonds with confidence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
