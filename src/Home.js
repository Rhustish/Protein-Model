import React, { useState } from 'react'
import slogo from "./assets/slogo.png"
import "./Home.css"

export default function Home(props) {

  const handleClick = (query)=>{
    props.onClickHandler(query)
  }
  const [queryTracer,setQueryTracer] = useState("")

  const queryChangeHandler = (query)=>{
    setQueryTracer(query.target.value)
    console.log(queryTracer);
  }
  
  return (
    <div className="wrapper">
    <div className="heading">
      <p className="headingText">Protein Models: Find the Perfect Fit for Your Research</p>
    </div>
    <div className="searchbox">
      <input id="sox" className="sbox" type="text" placeholder="Enter PDB ID..." onChange={queryChangeHandler} />
      <button className='buton' onClick={()=>{handleClick(queryTracer)}}>
      <img id="exec" src={slogo} className="slogo" alt='Search' />
      </button>
    </div>
  </div>
  )
}
