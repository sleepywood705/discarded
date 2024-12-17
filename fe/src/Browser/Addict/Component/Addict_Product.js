import "./Addict_Product.scss";
import { useState, useEffect } from "react";


export function AddictProduct({ productData, hoverEffect = true }) {
  useEffect(() => {setCurrentUrl(productData.url);}, [productData]);
  const [currentUrl, setCurrentUrl] = useState(productData.url);

  return (
    <div id="AddictProduct">
      <img
        src={currentUrl}
        alt={productData.name}
        onMouseEnter={() => hoverEffect && setCurrentUrl(productData.hoverUrl)}
        onMouseLeave={() => hoverEffect && setCurrentUrl(productData.url)}
      />
      <div>
        <p>
          <span>{productData.name}</span>
          {productData.price}
        </p>
        <p>{productData.note}</p>
      </div>
    </div>
  );
}