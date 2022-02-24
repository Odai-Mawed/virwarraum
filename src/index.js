import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectLangauge from './path/SelectLangauge';
import GiveYourData from './path/GiveYourData';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/selectLangauge' element={<SelectLangauge />} />
        <Route path='/giveYourData/:language' element={<GiveYourData />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
