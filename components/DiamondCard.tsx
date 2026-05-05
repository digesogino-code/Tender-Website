interface DiamondListing {
  id: string;
  carat: number;
  color: string;
  clarity: string;
  cut: string;
  price: number;
  shape: string;
  certification: string;
  image: string;
}

export default function DiamondCard({ diamond }: { diamond: DiamondListing }) {
  return (
    <div className="diamond-card bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-500 transition">
      <div className="relative">
        <img 
          src={diamond.image} 
          alt={diamond.shape} 
          className="w-full h-72 object-cover" 
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-xs font-mono rounded-full">
          {diamond.certification}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-baseline mb-3">
          <p className="text-3xl font-semibold text-cyan-400">
            ${diamond.price.toLocaleString()}
          </p>
          <p className="text-zinc-400">{diamond.carat} ct</p>
        </div>
        <p className="text-xl font-medium mb-4">{diamond.shape} • {diamond.color}{diamond.clarity}</p>
        
        <button className="w-full bg-white hover:bg-cyan-400 text-black py-4 rounded-2xl font-semibold transition">
          VIEW FULL DETAILS
        </button>
      </div>
    </div>
  );
}
