import express from "express"
import {fileURLToPath} from "url"
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.htm`)
})

app.get("/style.css",(req,res)=>{
    res.sendFile(`${__dirname}/style.css`)
})

app.get("/index.js",(req,res)=>{
    res.sendFile(`${__dirname}/index.js`)
})

app.get("/logo.svg",(req,res)=>{
    res.sendFile(`${__dirname}/logo.svg`)
})

app.get("/slogo.png",(req,res)=>{
    res.sendFile(`${__dirname}/slogo.png`)
})

app.listen(3000,()=>{console.log("Server Started on port 3000");})