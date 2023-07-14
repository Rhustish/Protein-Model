import React, { useEffect, useState } from 'react'
import * as NGL from 'ngl';
// import uri from "../assets/model.cif"

export default function Frame({ pdbid, no }) {
  const uri = `https://files.rcsb.org/download/${pdbid}-assembly${no}.cif`
  const [loading, setLoading] = useState(true);
  console.log("here");
  useEffect(() => {
    setLoading(true)
    const stage = new NGL.Stage('viewport')
    stage.loadFile(uri).then(function (o) {
      o.addRepresentation('cartoon');

      o.autoView();
      setLoading(false)
    });
  }, [uri])

  if (loading) {
    return (
      <div id='load'>
        <div className="loading-spinner">
          <div className="spinner-inner"></div>
          <span className="loading-text"><span className="fun-animation">Loading</span><span className="fun-animation">.</span><span className="fun-animation">.</span><span className="fun-animation">.</span></span>
        </div>
      </div>
    )
  }


  return (
    <div id="viewport" style={{ width: '100%', height: '100%' }}></div>
  )
}