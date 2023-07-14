import React, { useEffect, useState } from 'react'
import List from '../components/List';
import "./Info.css"
import Home from './Home';
import Frame from '../components/Frame';

export default function Info(props) {
  const pdbid = props.query.toUpperCase();

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [currsel,setCurrSel] = useState("1");

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const Ires = await fetch(`https://data.rcsb.org/rest/v1/core/entry/${pdbid}`)
      const Idata = await Ires.json()
      setApiData(Idata);
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

  if (!loading && apiData.status === 404) {

    return (<Home onClickHandler={props.onClickHandler} errorstate={true} />)
  }

  return (
    <div className='p2w'>
      <div className="topbar">
        <p className='bossTitle'>{pdbid}  </p>
        <p id='Fname' >{apiData.struct.pdbx_descriptor}</p>
        <p id='name' >{apiData.struct.title}</p>
      </div>
      <hr />
      <div className="mainframe">
        <div className='leftframe'>
          <div className="pinfo">
            <ul>
              <li>Type : {apiData.struct_keywords.text}</li>
              <li>Monomer Count : {apiData.rcsb_entry_info.deposited_modeled_polymer_monomer_count}</li>
              <li>Molecular Weight : {apiData.rcsb_entry_info.molecular_weight} g/M</li>
              <li>Number of Available Assemblies : {apiData.rcsb_entry_info.assembly_count}</li>
              <li>Polymer Composition : {apiData.rcsb_entry_info.polymer_composition}</li>
            </ul>
            <List count={apiData.rcsb_entry_info.assembly_count}  currsel={currsel} setCurrSel={setCurrSel} pid={pdbid}/>
          </div>
          <div className="controls">
            <p id="homebutton" onClick={() => props.setIsSearched(false)} >🏠 Home</p>
          </div>
        </div>
        <div className='rightframe'>
          <Frame no={currsel} pdbid={pdbid}/>
        </div>
      </div>
    </div>
  )
}