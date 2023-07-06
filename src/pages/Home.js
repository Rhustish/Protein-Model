import React, { useState } from 'react'
import slogo from "../assets/slogo.png"
import "./Home.css"

export default function Home(props) {

  const handleClick = (query) => {
    if(query.length !== 4){
      alert("Please Enter a valid PDB ID")
      return
    }
    props.onClickHandler(query)
  }
  const [queryTracer, setQueryTracer] = useState("")
  const [errorstate,setErrorState] = useState(props.errorstate);

  const queryChangeHandler = (query) => {
    setQueryTracer(query.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick(queryTracer);
    }
  };


  if(errorstate){
    alert("Invalid PDB ID. Please try again")
    setErrorState(false);
  }

  return (
    <div className="wrapper">

      <div className="heading">
        <p className="headingText">Protein Models: Find the Perfect Fit for Your Research</p>
      </div>
      <div className="searchbox">
        <input id="sox" className="sbox" type="text" placeholder="Enter PDB ID..." onChange={queryChangeHandler} onKeyDown={handleKeyPress}/>
        <button className='buton' onClick={() => { handleClick(queryTracer) }}>
          <img id="exec" src={slogo} className="slogo" alt='Search' />
        </button>
      </div>
    </div>
  )
  
}   
