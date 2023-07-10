const fs = require('fs');
const csv = require('fast-csv');

// Define the CSV file path and JSON output path
const csvFilePath = 'data.csv';
const jsonFilePath = 'data.json';

// Create an object to store the protein data
const proteinData = {};

// Read the CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv.parse({ headers: false }))
  .on('data', (row) => {
    // Extract the protein name and corresponding value
    const [protein, , value] = row;
    const assembly = protein.split('_')[0];
    const sequence = parseInt(protein.split('_')[1]);

    // Check if the protein exists in the proteinData object
    if (!proteinData[assembly]) {
      proteinData[assembly] = {};
    }

    // Add the value to the protein's array in the proteinData object
    proteinData[assembly][sequence] = parseFloat(value);
  })
  .on('end', () => {
    // Sort the sequences in ascending order
    for (const assembly in proteinData) {
      proteinData[assembly] = Object.values(proteinData[assembly]).sort((a, b) => a - b);
    }

    // Convert the proteinData object to JSON
    const jsonData = JSON.stringify(proteinData, null, 2);

    // Write the JSON data to a file
    fs.writeFile(jsonFilePath, jsonData, (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been created successfully!');
      }
    });
  });
