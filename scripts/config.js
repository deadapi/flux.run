require('dotenv').config();
const path = require('path');
const fs = require('fs');


const config = {
  PORT: process.env.PORT || 3000,
  DIRECTORY: process.env.DIRECTORY || 'src',  
  FILE: process.env.FILE || 'index.html',     
  SERVER_NAME: process.env.SERVER_NAME || 'Local Server'
};

// paths relative to the user's current working directory
const directoryPath = path.resolve(process.cwd(), config.DIRECTORY);
const filePath = path.join(directoryPath, config.FILE);

// Check if the directory exists
if (!fs.existsSync(directoryPath)) {
  console.error(`Oops! The directory "${config.DIRECTORY}" seems to have gone missing. Maybe try checking the space-time continuum?`);
  process.exit(1);
}

// Check if the file exists
if (!fs.existsSync(filePath)) {
  console.error(`Uh-oh! The file "${config.FILE}" can't be found. Did you misplace it, or is it just shy?`);
  process.exit(1);
}

module.exports = { config, directoryPath, filePath };
