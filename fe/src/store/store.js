import { configureStore } from '@reduxjs/toolkit';
import { productData } from './Addict_ProductData';
import { fragranceData } from './Addict_FragranceData';
import { cardData } from './Addict_CardData';

export default configureStore({
  reducer: {
    productData: productData.reducer,
    cardData: cardData.reducer,
    fragranceData: fragranceData.reducer,
  }
});