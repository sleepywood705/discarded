import { useEffect, useState } from "react";
import "./Addict.scss";
import { Window } from '../../Interface/Window';
import { AddictHeader } from "./component/Addict_Header";
import { AddictFooter } from "./component/Addict_Footer";
import { AddictHomePage } from "./page/Addict_Home";
import { AddictExplain } from "./page/Addict_Explain";
import { AddictAllPage } from "./page/Addict_All";
import { AddictNotePage } from "./page/Addict_Note";
import { AddictOfflinePage } from "./page/Addict_Offline";
import store from './store/store';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { useStateChange, useWindowClose } from "../../Hook/Hook";

export function Addict({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);
  const explain = useStateChange(false);

  return (
    <Provider store={store}>
      <Window id="Addict" tabText="에이딕트 리디자인" 닫기={windowClose}>
        {explain.state && <AddictExplain onClose={explain.CLOSE} />}
        <div className="Container">
          <AddictHeader onClick={explain.OPEN} />
          <Routes>
            <Route path="/" element={<AddictHomePage />} />
            <Route path="/all" element={<AddictAllPage />} />
            <Route path="/note" element={<AddictNotePage />} />
            <Route path="/mall" element={<AddictOfflinePage />} />
          </Routes>
          <AddictFooter />
        </div>
      </Window>
    </Provider>
  );
}
