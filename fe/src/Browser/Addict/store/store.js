import { cardData } from "./Data_Card";
import { productData } from "./Data_Product";
import { fragranceData } from "./Data_Fragrance";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
  reducer: {
    productData: productData.reducer,
    cardData: cardData.reducer,
    fragranceData: fragranceData.reducer,
  }
});