import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import menuData from '../lib/menuData';

const currency = (n) => `රු ${n.toLocaleString('en-US')}`;

const ItemDetail = () => {
  const { id } = useParams();

  const item = useMemo(() => {
    for (const cat of menuData) {
      const found = cat.items.find((i) => i.id === id);
      if (found) return { ...found, category: cat.category };
    }
    return null;
  }, [id]);

  if (!item) {
    return (
      <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#FFF8E1] to-white">
        <div className="container mx-auto px-6">
          <div className="text-center py-20">
            <h2 className="text-2xl font-display font-bold">Item not found</h2>
            <p className="mt-4 text-gray-600">We couldn't find that menu item.</p>
            <Link to="/menu" className="inline-block mt-6 bg-amber-800 text-white px-4 py-2 rounded-full">Back to Menu</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-[#FFF8E1] to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="relative h-80 md:h-auto">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x600/FFF8E1/5D4037?text=Cookie+Love';
              }}
            />
            <div className="absolute top-4 left-4 bg-amber-800 text-white px-3 py-1 rounded-full font-bold">{item.category}</div>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="font-display font-extrabold text-3xl text-gray-900">{item.name}</h1>
              <p className="mt-3 text-gray-600">{item.desc}</p>

              <div className="mt-6 flex items-center gap-4">
                <div className="text-3xl font-display font-bold text-amber-800">{currency(item.price)}</div>
                {item.tags?.map((t) => (
                  <div key={t} className="text-xs bg-yellow-50 text-amber-800 px-2 py-1 rounded-full font-bold">{t}</div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link to="/menu" className="text-amber-800 font-bold">← Back to Menu</Link>
              <button className="bg-amber-800 text-white px-5 py-3 rounded-full font-bold shadow-lg">Order via Phone</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
