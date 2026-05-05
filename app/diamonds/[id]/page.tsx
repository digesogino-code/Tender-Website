'use client';

import { useParams } from 'next/navigation';

const mockListings: any = {
  '1': {
    id: '1',
    carat: 1.52,
    color: 'D',
    clarity: 'VVS1',
    cut: 'Excellent',
    price: 12450,
    shape: 'Round',
    certification: 'GIA',
    image: 'https://picsum.photos/id/1015/800/600',
  }
};

export default function DiamondDetail() {
  const params = useParams();
  const diamond = mockListings[params.id as string];

  if (!diamond) {
    return <p className="text-center py-32 text-3xl">Diamond not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <img src={diamond.image} alt={diamond.shape} className="rounded-3xl w-full" />

        <div>
          <h1 className="text-5xl font-serif mb-4">{diamond.shape} {diamond.carat}ct</h1>
          <p className="text-6xl text-cyan-400 mb-8">${diamond.price.toLocaleString()}</p>
          
          <div className="space-y-4 text-lg">
            <p><span className="text-zinc-400">Color:</span> {diamond.color}</p>
            <p><span className="text-zinc-400">Clarity:</span> {diamond.clarity}</p>
            <p><span className="text-zinc-400">Cut:</span> {diamond.cut}</p>
            <p><span className="text-zinc-400">Certification:</span> {diamond.certification}</p>
          </div>

          <button className="mt-12 w-full bg-white text-black
