// URL of the PDB API
const apiUrl = `https://data.rcsb.org/rest/v1/core/entry/5crn`;

// Fetch the protein data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })  