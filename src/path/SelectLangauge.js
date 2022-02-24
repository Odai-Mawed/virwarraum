import React from 'react';

import '../App.css';
import {LanguageMenuItem} from '../components/LanguageMenuItem';

function SelectLangauge() {
  return (
    <div className="App">
      <header className="">
        <h1>Willkommen</h1>
        <h5>Wählen Sie eine Sprache aus</h5>
        
        <LanguageMenuItem />
        
      </header>
    </div>
  );
}

export default SelectLangauge;
