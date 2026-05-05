import { Diamond } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Diamond className="w-9 h-9 text-cyan-400" />
          <span className="text-3xl font-serif tracking-tight">Tender</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400 transition">Marketplace</Link>
          <Link href="/sell" className="hover:text-cyan-400 transition">Sell</Link>
          <Link href="/membership" className="hover:text-cyan-400 transition">Membership</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 text-sm font-medium hover:bg-zinc-900 rounded-full transition">Log in</button>
          <button className="bg-white text-black px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-cyan-400 transition">Start Selling</button>
        </div>
      </div>
    </nav>
  );
}
