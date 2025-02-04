import "./Addict_All.scss"
import {
  AddictAllProduct,
  AddictBestProduct,
  AddictLiquidProduct,
  AddictSolidProduct,
  AddictGiftProduct
} from "../component/Addict_AllProduct";
import { AddictProductTypeFilters } from "../component/Addict_ProductTypeFilter";
import { useState } from "react";


export function AddictAllPage() {
  const [buttonActive, setButtonActive] = useState(0);
  const buttonActiveProps = { buttonActive, setButtonActive }

  return (
    <div id="AddictAllPage">
      <AddictProductTypeFilters {...buttonActiveProps} />
      {buttonActive === 0 && <AddictAllProduct />}
      {buttonActive === 1 && <AddictBestProduct />}
      {buttonActive === 2 && <AddictLiquidProduct />}
      {buttonActive === 3 && <AddictSolidProduct />}
      {buttonActive === 4 && <AddictGiftProduct />}
    </div>
  );
}