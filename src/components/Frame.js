import React, { useEffect, useRef } from 'react';
import * as NGL from 'ngl';

export default function Frame({ pdbid, no }) {
  const uri = `https://files.rcsb.org/download/${pdbid}-assembly${no}.cif`;
  const stageRef = useRef(null);

  useEffect(() => {
    const viewport = document.getElementById('viewport');
    while (viewport.firstChild) {
      viewport.removeChild(viewport.firstChild);
    }
    const stage = new NGL.Stage('viewport');
    stageRef.current = stage;

    stage.loadFile(uri, { defaultRepresentation: true }).then((o) => {
      o.addRepresentation('cartoon');
      o.autoView();
    });

    return () => {
      if (stageRef.current) {
        stageRef.current.dispose();
      }
    };
  }, [uri]);

  return <div id="viewport" style={{ width: '99%', height: '99%', overflow: 'hidden' }}></div>;
}
