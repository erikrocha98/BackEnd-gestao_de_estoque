import express from "express";
import bodyParser from "body-parser";
import {addItem, getItems, removeItem} from "./controllers/inventoryController"

const app = express();
app.use(bodyParser.json());

app.post("/inventory", addItem);

app.delete("/inventory", removeItem);

app.get("/inventory", getItems);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});