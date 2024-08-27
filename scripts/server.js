// srcipts/server.js
// Written by a human - DeadAPI

const express = require('express');    
const morgan = require('morgan');      
const helmet = require('helmet');      
const fs = require('fs');              
const path = require('path');          
const { config, directoryPath, filePath } = require('./config'); 

const app = express(); 

app.use(helmet()); 

app.use(morgan('combined')); 

app.use(express.static(directoryPath, {
    dotfiles: 'deny',   
    index: false,       
    redirect: false     
}));

// file check
app.get('/', (req, res) => {
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath); 
    } else {
        res.status(404).send('File not found!'); 
    }
});

// console info
const server = app.listen(config.PORT, () => {
    console.log(`${config.SERVER_NAME} running at http://localhost:${config.PORT}`);
    console.log(`Serving "${config.FILE}" from "${config.DIRECTORY}"`);
});

// who dont like errs
app.use((req, res) => {
    res.status(404).send('Sorry, the page you are looking for does not exist.');
});

// err handlers so u dont do much
app.use((err, req, res) => {
    console.error(err.stack); 
    res.status(500).send('Something went wrong!');
});
