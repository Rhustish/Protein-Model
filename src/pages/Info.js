import React, { useEffect, useState } from 'react'
import "./Info.css"
import Home from './Home';

export default function Info(props) {
  const pdbid = props.query.toUpperCase() || "4B5M";

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const res = await fetch(`https://data.rcsb.org/rest/v1/core/entry/${pdbid}`)
      const data = await res.json()
      setApiData(data);
      setLoading(false)
    }
    fetchData();
  }, [pdbid])

  if (loading) {
    return (
      <div id='lo' className="p2w">
        <div className="loading-spinner">
          <div className="spinner-inner"></div>
          <span className="loading-text"><span className="fun-animation">Loading</span><span className="fun-animation">.</span><span className="fun-animation">.</span><span className="fun-animation">.</span></span>
        </div>
      </div>
    )
  }

  if(!loading && apiData.status === 404 ){
    
    return(<Home onClickHandler={props.onClickHandler} errorstate={true}/>)
  }

  return (
    <div className='p2w'>
      <div className="topbar">
        <p className='bossTitle'>{pdbid}  </p>
        <p id='name' className="name">{apiData.struct.pdbx_descriptor}</p>
        <p id='name' className="name">{apiData.struct.title}</p>
      </div>
      <hr />
      <div className="mainframe">
        <div className='leftframe'>
          <div className="pinfo">

          </div>
          <div className="controls">
            <p id="homebutton" onClick={()=>props.setIsSearched(false)} >🏠 Home</p>
          </div>
        </div>
        <div className='rightframe'>frame</div>
      </div>
    </div>
  )
}


