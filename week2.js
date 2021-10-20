
//Jessica Russ
//801019588

const express = require('express');
const app = express();
const port = 3000;
const { exec } = require('child_process');

app.get('/', (req, res) =>{
    exec('start "" "c:\\"');
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
