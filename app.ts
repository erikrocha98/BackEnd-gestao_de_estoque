import express from "express";
import bodyParser from "body-parser";
import addItem from "controllers/inventoryController";

const app = express();
app.use(bodyParser.json());

app.post("/inventory", addItem);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});