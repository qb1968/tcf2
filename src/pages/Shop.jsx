import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 19.0,
    images: ["/images/One.jpg"],
  },
  {
    id: 2,
    name: "Long Sleeve T-Shirt",
    price: 35.0,
    images: ["/images/Two.jpg", "/images/Three.jpg"],
  },
  {
    id: 3,
    name: "Hoodie",
    price: 42.0,
    images: ["/images/Four.jpg"],
  },
];

export default function Shop() {
  const [selections, setSelections] = useState({});
  const [activeImage, setActiveImage] = useState({});

  const handleSelectChange = (id, field, value) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleBuy = async (product) => {
    const selected = selections[product.id] || {};
    const size = selected.size || "M";
    const color = selected.color || "Black";
    const quantity = selected.quantity || 1;

    try {
      const res = await fetch(
        "https://tcf2back.onrender.com/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productName: product.name,
            size,
            color,
            quantity,
            price: product.price,
          }),
        }
      );

      const data = await res.json();

      // Open Stripe checkout in a new tab
      const stripeWindow = window.open(data.url, "_blank");
      if (!stripeWindow) {
        alert("Please allow popups to complete checkout.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to start checkout. Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const mainImg = activeImage[product.id] ?? product.images[0];
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md flex flex-col"
              >
                {/* Main Image */}
                <div className="w-full aspect-[4/5]">
                  <img
                    src={mainImg}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 p-2 justify-center">
                    {product.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className={`w-12 h-12 object-cover rounded cursor-pointer border ${
                          mainImg === img
                            ? "border-blue-500"
                            : "border-gray-300"
                        }`}
                        onClick={() =>
                          setActiveImage((prev) => ({
                            ...prev,
                            [product.id]: img,
                          }))
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-blue-600 font-bold mt-2 mb-2">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* Dropdowns: stack vertically on mobile */}
                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    {/* Size */}
                    <select
                      value={selections[product.id]?.size || "M"}
                      onChange={(e) =>
                        handleSelectChange(product.id, "size", e.target.value)
                      }
                      className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="2XL">2XL (+$2)</option>
                    </select>

                    {/* Color */}
                    <select
                      value={selections[product.id]?.color || "Black"}
                      onChange={(e) =>
                        handleSelectChange(product.id, "color", e.target.value)
                      }
                      className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <option value="Black">Black</option>
                      <option value="Navy">Navy Blue</option>
                    </select>

                    {/* Quantity */}
                    <select
                      value={selections[product.id]?.quantity || 1}
                      onChange={(e) =>
                        handleSelectChange(
                          product.id,
                          "quantity",
                          e.target.value
                        )
                      }
                      className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
                    >
                      {[1, 2, 3, 4, 5].map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Buy Button: full width on mobile */}
                  <button
                    onClick={() => handleBuy(product)}
                    className="w-full sm:w-auto mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
