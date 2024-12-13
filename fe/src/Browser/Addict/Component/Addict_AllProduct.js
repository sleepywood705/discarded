import "./Addict_AllProduct.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AddictProduct } from "./Addict_Product";


export function AddictAllProduct() {
  const productData = useSelector((state) => state.productData);
  const [selectedFilter, setSelectedFilter] = useState("");
  
  const filteredProducts = Object.values(productData)
    .flat()
    .filter((item) => {
      if (item.name === "" && item.url.includes("noStock")) return false; // "제품없음" 객체 제외
      if (selectedFilter === "") return true; // 필터가 선택되지 않은 경우 모든 제품을 표시
      return item.filterCode === selectedFilter;
    });

  const handleFiltering = (filterCode) => { setSelectedFilter(filterCode); };

  return (
    <section id="AddictAllProduct">
      <div>
        <button
          // style={{ border: "1px solid #eee" }}x
          onClick={() => handleFiltering("")}
        >
          All
        </button>
        <button
          // style={{ backgroundColor: "#F4F4F4" }}
          onClick={() => handleFiltering("animal")}
        >
          Animal Note
        </button>
        <button
          // style={{ backgroundColor: "#543310", color: "#fff" }}
          onClick={() => handleFiltering("woody")}
        >
          Woody Note
        </button>
        <button
          // style={{ backgroundColor: "#0A6847", color: "#fff" }}
          onClick={() => handleFiltering("herbal")}
        >
          Herbal & Green Note
        </button>
        <button
          style={{
            // backgroundColor: "#FFBDF7",
            // color: "#FE0000",
            marginBottom: "8px",
          }}
          onClick={() => handleFiltering("floral")}
        >
          Floral Note
        </button>
        <br />
        <button
          // style={{ backgroundColor: "#40534C", color: "#fff" }}
          onClick={() => handleFiltering("mossy")}
        >
          Mossy Note
        </button>
        <button
          // style={{ backgroundColor: "#E0F4FF", color: "#008DDA" }}
          onClick={() => handleFiltering("powdery")}
        >
          Watery & Powdery Note
        </button>
        <button
          // style={{ backgroundColor: "#F0FF42", color: "#06D001" }}
          onClick={() => handleFiltering("citrus")}
        >
          Citrus Note
        </button>
        <button
          // style={{ backgroundColor: "#C40C0C", color: "#FFFFFF" }}
          onClick={() => handleFiltering("fruity")}
        >
          Fruity Note
        </button>
        <button
          // style={{ backgroundColor: "#F4F4F4", color: "#8158FC" }}
          onClick={() => handleFiltering("special")}
        >
          Special Note
        </button>
      </div>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <AddictProduct key={index} productData={item} />
          ))
        ) : (
          <AddictProduct
            productData={{
              name: "",
              url: "../../../img/browser/Addict/noStock.JPG",
              hoverUrl: "../../../img/browser/Addict/noStock.JPG",
            }}
          />
        )}
      </div>
    </section>
  );
}

export function AddictBestProduct() {
  const productData = useSelector((state) => state.productData);
  const filteredProducts = Object.values(productData)
    .flat()
    .filter((item) => item.bestCode);

  return (
    <div id="AddictBestProduct">
      {filteredProducts.map((product, index) => (
        <AddictProduct key={index} productData={product} />
      ))}
    </div>
  );
}

export function AddictLiquidProduct() {
  const productData = useSelector((state) => state.productData);
  const filteredProducts = Object.values(productData)
    .flat()
    .filter((item) => item.liquid);

  return (
    <div id="AddictLiquidProduct">
      {filteredProducts.map((product, index) => (
        <AddictProduct key={index} productData={product} />
      ))}
    </div>
  );
}

export function AddictSolidProduct() {
  const productData = useSelector((state) => state.productData);
  const filteredProducts = Object.values(productData)
    .flat()
    .filter((item) => item.solid);

  return (
    <div id="AddictSolidProduct">
      {filteredProducts.map((product, index) => (
        <AddictProduct key={index} productData={product} />
      ))}
    </div>
  );
}

export function AddictGiftProduct() {
  const productData = useSelector((state) => state.productData);
  const filteredProducts = Object.values(productData)
    .flat()
    .filter((item) => item.gift);

  return (
    <div id="AddictGiftProduct">
      {filteredProducts.map((product, index) => (
        <AddictProduct key={index} productData={product} />
      ))}
    </div>
  );
}
