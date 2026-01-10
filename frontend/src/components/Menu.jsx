import { useMemo, useState } from 'react';
import { menuData } from '../lib/menuData';
import { Link } from 'react-router-dom';

const currency = (n) => `රු ${n.toLocaleString('en-US')}`;

const CategoryTabs = ({ categories, active, onChange }) => (
  <div className="flex flex-wrap gap-3 items-center">
    {categories.map((c) => (
      <button
        key={c}
        onClick={() => onChange(c)}
        className={`px-4 py-2 rounded-full font-bold transition-all text-sm shadow-sm ${
          active === c
            ? 'bg-amber-800 text-white scale-105 shadow-2xl'
            : 'bg-white text-gray-800 hover:bg-yellow-50'
        }`}
      >
        {c}
      </button>
    ))}
  </div>
);

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgba(13,12,11,0.08)] hover:shadow-[0_10px_40px_rgba(13,12,11,0.12)] transition transform hover:-translate-y-1 flex flex-col">
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400/FFF8E1/5D4037?text=Cookie+Love';
          }}
        />
        {item.tags?.length > 0 && (
          <div className="absolute top-3 left-3 bg-amber-800 text-white px-3 py-1 rounded-full text-xs font-bold">
            {item.tags[0]}
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-display font-extrabold text-lg text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="text-amber-800 font-display font-bold text-lg">{currency(item.price)}</div>
        <button className="bg-gradient-to-r from-amber-600 to-yellow-400 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          Add
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const categories = useMemo(() => menuData.map((c) => c.category), []);
  const [active, setActive] = useState(categories[0]);
  const [q, setQ] = useState('');

  const activeItems = useMemo(() => {
    const cat = menuData.find((c) => c.category === active);
    if (!cat) return [];
    return cat.items.filter((it) => it.name.toLowerCase().includes(q.toLowerCase()) || it.desc.toLowerCase().includes(q.toLowerCase()));
  }, [active, q]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF8E1] to-white pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900">Menu</h1>
            <p className="text-gray-600 mt-2">Handpicked treats — freshly baked and priced in Sri Lankan Rupees.</p>
          </div>

          <div className="flex items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search treats, e.g. chocolate"
              className="px-4 py-2 rounded-full border-2 border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <Link to="/" className="hidden md:inline-block bg-white px-4 py-2 rounded-full border-2 border-amber-800 text-amber-800 font-bold">Back Home</Link>
          </div>
        </div>

        <div className="mb-6">
          <CategoryTabs categories={categories} active={active} onChange={setActive} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((it) => (
            <ItemCard key={it.id} item={it} />
          ))}
        </div>

        {activeItems.length === 0 && (
          <div className="mt-12 text-center text-gray-600">No items found. Try a different search or category.</div>
        )}
      </div>
    </main>
  );
};

export default Menu;
