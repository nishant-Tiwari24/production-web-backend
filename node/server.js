import fs from 'fs';
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))

import express from 'express'
const app = express();

app.listen(3000,() => {console.log("Server Started")})


