import { useState } from 'react';
import './App.css';
import Home from "./Home"
import Model from './Model';

function App() {

  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState("")

  const onClickHandler = (query) => {
    setIsSearched(true);
    setQuery(query)
  }

  return (
    <>
      {isSearched ?
        <Model query={query} /> :
        <Home onClickHandler={onClickHandler} />
      }
    </>
  );
}

export default App;
