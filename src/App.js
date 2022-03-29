import './App.css';
import Data from './quotes.json';
import React, { useState } from 'react';
import QuoteBox from './Components/QuoteBox.js';
import Button from './Components/Button.js';

function App() {

  let index = Math.floor(Math.random()*102);
  const [color, setColor] = useState('yellow');
  const [quote, setQuote] = useState(Data.quotes[index]);

  /*function ChangeBackground () {

  }*/

  function Quote(){
    index = Math.floor(Math.random()*102);
    setQuote(Data.quotes[index]);
    /*ChangeBackground();*/
  }

  return (
    <div className="App">
      <div className="container">
        <QuoteBox quote={quote}/>
        <Button className="btn-next" change={Quote} quote={quote.quote}/>
      </div>
    </div>
  );
}

export default App;
