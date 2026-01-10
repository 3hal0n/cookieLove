import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import menuData from '../lib/menuData';

const currency = (n) => `රු ${n.toLocaleString('en-US')}`;

const ItemDetail = () => {
  const { id } = useParams();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const cat = menuData.find((cat) => cat.items.some((i) => i.id === id));
  const found = cat?.items.find((i) => i.id === id);
  const item = found ? { ...found, category: cat.category } : null;

  if (!item) {
    return (
      <main className="min-h-screen pt-28 pb-20 bg-linear-to-br from-[#FFF8E1] to-white">
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

  const images = [
    item.img,
    `https://placehold.co/1000x800/FFEFD5/5D4037?text=${encodeURIComponent(item.name + ' 2')}`,
    `https://placehold.co/1000x800/FFF1E0/5D4037?text=${encodeURIComponent(item.name + ' 3')}`,
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 bg-linear-to-br from-[#FFF8E1] to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-6">
          {/* Gallery */}
          <div className="p-6 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={images[selectedIdx]}
                alt={item.name}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/1000x800/FFF8E1/5D4037?text=Cookie+Love';
                }}
              />
            </div>

            <div className="flex gap-3 overflow-auto">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIdx(i)}
                  className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 ${selectedIdx === i ? 'border-amber-800' : 'border-transparent'} `}
                >
                  <img src={src} alt={`${item.name}-${i}`} className="w-full h-full object-cover" onError={(e)=>{e.target.onerror=null;e.target.src='https://placehold.co/300x300/FFF8E1/5D4037?text=Img'}} />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
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

              <div className="mt-6 text-gray-700 leading-relaxed">
                <h3 className="font-bold mb-2">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at mi sed
                  libero efficitur tempus. Integer vitae nibh vitae urna pretium tincidunt. Sed
                  mattis, mauris sed pulvinar fermentum, nibh sapien sodales arcu, ac posuere
                  lacus ipsum non elit. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Vivamus in arcu vitae tortor auctor
                  vulputate. Praesent sit amet sem id odio rhoncus feugiat.
                </p>

                <div className="mt-4">
                  <h4 className="font-bold">Ingredients</h4>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                    <li>Flour</li>
                    <li>Sugar</li>
                    <li>Butter</li>
                    <li>Eggs</li>
                    <li>Natural flavors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link to="/menu" className="text-amber-800 font-bold">← Back to Menu</Link>
              <div className="text-sm text-gray-600">Call to order: <span className="font-bold text-amber-800">011-XXXXXXX</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
