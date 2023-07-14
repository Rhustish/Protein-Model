import React, { useEffect } from 'react'
import * as NGL from 'ngl';
export default function Frame({ pdbid, no }) {
  const uri = `https://files.rcsb.org/download/${pdbid}-assembly${no}.cif`
  console.log("here");
  useEffect(() => {

    const stage = new NGL.Stage('viewport')
    stage.loadFile(uri , { defaultRepresentation: true }).then(function (o) {
      o.addRepresentation('cartoon');

      o.autoView();

    });
  }, [uri])

  return (

    <div id="viewport" style={{ width: '100%', height: '100%' , overflow:"hidden" }}>{console.log("nnahi ayar phit jtyyyyyyyyyy")}</div>
  )
}