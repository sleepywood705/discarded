import "./Addict_All.scss"
import { 
  AddictAllProduct, 
  AddictBestProduct, 
  AddictLiquidProduct, 
  AddictSolidProduct, 
  AddictGiftProduct } from "../Component/Addict_AllProduct";
import { AddictProductTypeFilters } from "../Component/Addict_ProductTypeFilter";
import { useState } from "react";


export function AddictAllPage() {
  const [buttonActive, setButtonActive] = useState(0);
  const buttonActiveProps = { buttonActive, setButtonActive }

  return (
    <article id="AddictAllPage">
      <AddictProductTypeFilters {...buttonActiveProps} />
      {buttonActive === 0 && <AddictAllProduct/>}
      {buttonActive === 1 && <AddictBestProduct/>}
      {buttonActive === 2 && <AddictLiquidProduct/>}
      {buttonActive === 3 && <AddictSolidProduct/>}
      {buttonActive === 4 && <AddictGiftProduct/>}
    </article>
  );
}