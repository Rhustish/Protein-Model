import { useState } from 'react';
import Home from "./pages/Home"
import Info from './pages/Info';

function App() {

  const [isSearched, setIsSearched] = useState(false); //change this to false at the end please dont forger
  const [query, setQuery] = useState("")

  const onClickHandler = (query) => {
    setIsSearched(true);
    setQuery(query)
  }

  return (
    <>
      {isSearched ?
        <Info query={query} setIsSearched={setIsSearched} onClickHandler={onClickHandler}/> :
        <Home onClickHandler={onClickHandler}  errorstate = {false}/>
      }
    </>
  );
}

export default App;
