import express from "express";
import fs, { readFile } from "fs";

const app = express();

console.log("hello");

const data = fs.readFileSync('data.json','utf-8');
console.log(data)

app.listen(3000, () => {
    console.log("Listening to port 3000");
});


