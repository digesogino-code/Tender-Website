'use client';

export default function MembershipPage() {
  const tiers = [
    { name: "Tier C", price: 0, desc: "Basic browsing", color: "zinc" },
    { name: "Tier B", price: 29, desc: "Full details + contact", color: "emerald", popular: true },
    { name: "Tier A", price: 99, desc: "Unlimited trading + Priority", color: "cyan" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif tracking-tight mb-4">Tender Membership</h1>
        <p className="text-2xl text-zinc-400">Choose your level of access</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div 
            key={tier.name} 
            className={`border ${tier.popular ? 'border-cyan-400 scale-105' : 'border-zinc-700'} rounded-3xl p-10 bg-zinc-900`}
          >
            {tier.popular && <div className="text-cyan-400 text-sm font-semibold mb-4">MOST POPULAR</div>}
            
            <h3 className="text-3xl font-semibold mb-2">{tier.name}</h3>
            <p className="text-6xl font-bold mb-6">
              ${tier.price}<span className="text-xl font-normal text-zinc-400">/mo</span>
            </p>
            <p className="text-zinc-400 mb-8">{tier.desc}</p>

            <button className={`w-full py-5 rounded-2xl font-semibold ${tier.price === 0 ? 'bg-zinc-700' : 'bg-white text-black hover:bg-cyan-400'}`}>
              {tier.price === 0 ? 'Current Plan' : 'Upgrade Now'}
            </button>
          </div>
        ))}
