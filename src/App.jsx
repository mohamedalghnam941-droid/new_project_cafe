import React, { useState } from "react";
import "./index.css";

const products = [
  {
    id: 1,
    name: "Turkish Coffee",
    price: "115 EGP",
    category: "hot",
    img: "https://traveldudes.com/wp-content/uploads/2023/03/Drinking-turkish-coffee.jpg"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "95 EGP",
    category: "hot",
    img: "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2022/Capuccino.jpg.jpeg?itok=J1pWPwe2"
  },
  {
    id: 3,
    name: "Latte",
    price: "85 EGP",
    category: "hot",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Latte_with_winged_tulip_art.jpg/500px-Latte_with_winged_tulip_art.jpg"
  },
  {
    id: 4,
    name: "Hot Chocolate",
    price: "70 EGP",
    category: "hot",
    img: "https://www.sugarhero.com/wp-content/uploads/2018/01/orange-hot-chocolate-2.jpg"
  },
  {
    id: 9,
    name: "Espresso",
    price: "100 EGP",
    category: "hot",
    img: "https://www.foodandwine.com/thmb/FPlfMcs5yCtv82MvoF1A1h_i0OY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Partners-Cappuccino-FT-BLOG0523-d2eed8fcd48d464282176339908662f7.jpg"
  },

  {
    id: 5,
    name: "Ice Coffee",
    price: "55 EGP",
    category: "cold",
    img: "https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6-683x1024.jpg"
  },
  {
    id: 6,
    name: "Mojito",
    price: "35 EGP",
    category: "cold",
    img: "https://www.liquor.com/thmb/d8ISqwKZVgLgrMsMbHGmRAuhSuc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mojito-720x720-primary-6a57f80e200c412e9a77a1687f312ff7.jpg"
  },
  {
    id: 7,
    name: "Iced Oreo",
    price: "30 EGP",
    category: "cold",
    img: "https://www.thatcutedish.com/wp-content/uploads/2022/02/oreo-bubble-shake-1.jpg"
  },
  {
    id: 8,
    name: "Milkshake",
    price: "125 EGP",
    category: "cold",
    img: "https://www.allrecipes.com/thmb/IYsRM0xZA-nZ6StNINUwu8QHgGU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg"
  },
  {
    id: 10,
    name: "Smoothie",
    price: "70 EGP",
    category: "cold",
    img: "https://www.fannetasticfood.com/wp-content/uploads/2021/09/Berry-Yogurt-Smoothie-FF-featured-image-1024x1024.jpg"
      },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const visibleProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : [];

  return (
    <div className="page">
      <div className="center-box">
        <h1>☕ Mandoo Cafe</h1>
        <div className="filters">
          <button
            className={`filter-btn ${activeCategory === "hot" ? "active" : ""}`}
            onClick={() =>
              setActiveCategory(activeCategory === "hot" ? null : "hot")
            }
          >
            Hot Drinks
          </button>
          <button
            className={`filter-btn ${activeCategory === "cold" ? "active" : ""}`}
            onClick={() =>
              setActiveCategory(activeCategory === "cold" ? null : "cold")
            }
          >
            Cold Drinks
          </button>
        </div>
      </div>

      <main className="cards-container">
        {visibleProducts.length === 0 ? (
          <p className="no-products"></p>
        ) : (
          visibleProducts.map((p) => (
            <div key={p.id} className="card">
              <div className="img-wrap">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="card-body">
                <h3 className="prod-name">{p.name}</h3>
                <p className="prod-price">{p.price}</p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}







