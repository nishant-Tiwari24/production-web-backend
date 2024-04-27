import fs from 'fs';
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))

import express from 'express'
const app = express();

app.use((req,res,next) => {
    console.log(req.get('User-Agent') , req.body);
    next();

})
app.get('/',(req,res) => res.send(data))
app.listen(3000,() => {console.log("Server Started")})


