// async function fetchCifFiles(pdbId) {
//   const apiBaseUrl = 'https://files.rcsb.org/download';
//   const cifUrls = [];

//   try {
//     // Fetch the CIF data for the protein
//     const response = await fetch(`${apiBaseUrl}/${pdbId}.cif`);
//     const cifData = await response.text();

//     // Extract the assembly indices
//     const assemblyIndices = [];
//     let assemblyStart = 0;
//     cifData.split('\n').forEach((line, index) => {
//       if (line.startsWith('_pdbx_struct_assembly.id')) {
//         if (assemblyStart > 0) {
//           assemblyIndices.push([assemblyStart, index]);
//         }
//         assemblyStart = index;
//       }
//     });
//     assemblyIndices.push([assemblyStart, cifData.split('\n').length]);

//     // Fetch CIF files for each assembly
//     for (let i = 0; i < assemblyIndices.length; i++) {
//       const [start, end] = assemblyIndices[i];
//       const assemblyData = cifData.split('\n').slice(start, end).join('\n');
//       const assemblyUrl = `${apiBaseUrl}/${pdbId}_assembly${i + 1}.cif`;
//       cifUrls.push(assemblyUrl);

//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }

//   return cifUrls;
// }

// // Usage example
// const pdbId = '4b5m '; // Replace with the desired PDB identifier
// fetchCifFiles(pdbId)
//   .then((cifUrls) => {
//     console.log('CIF URLs:', cifUrls);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
fetch( 'https://files.rcsb.org/download/1XYZ_assembly1.cif').then(res=>{console.log(res);})