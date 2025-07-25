import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 19.99,
    image:
      "https://plus.unsplash.com/premium_photo-1690349404224-53f94f20df8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Long Sleeve T-Shirt",
    price: 24.99,
    image:
      "https://plus.unsplash.com/premium_photo-1689327920831-a4024422b4ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZyUyMHNsZWV2ZSUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Shop() {
  const [selections, setSelections] = useState({});

  const handleSelectChange = (id, field, value) => {
    setSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleBuy = (product) => {
    const selected = selections[product.id] || {};
    alert(
      `Buying ${product.name}\nSize: ${selected.size || "M"}\nQuantity: ${
        selected.quantity || 1
      }`
    );
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 font-custom">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Shop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="w-full aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>
                <p className="text-blue-600 font-bold mt-2 mb-2">
                  ${product.price.toFixed(2)}
                </p>

                <div className="flex gap-2 mb-4">
                  <select
                    className="border rounded px-2 py-1 text-sm"
                    value={selections[product.id]?.size || "M"}
                    onChange={(e) =>
                      handleSelectChange(product.id, "size", e.target.value)
                    }
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>

                  <select
                    className="border rounded px-2 py-1 text-sm"
                    value={selections[product.id]?.quantity || 1}
                    onChange={(e) =>
                      handleSelectChange(product.id, "quantity", e.target.value)
                    }
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => handleBuy(product)}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
