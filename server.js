import express from "express"
import {fileURLToPath} from "url"
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express();

app.use(express.static(__dirname))
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.htm`)
})

app.listen(3000,()=>{console.log("Server Started on port 3000");})