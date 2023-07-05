import { useState } from 'react';
import './App.css';
import Home from "./Home"
import Model from './Model';

function App() {

  const [isSearched, setIsSearched] = useState(false);

  const onClickHandler = () => {
    // setIsSearched(true);
  }

  return (
    <>
      {isSearched ? 
      <Model />:
      <Home onClickHandler={onClickHandler} />
      }
    </>
  );
}

export default App;
