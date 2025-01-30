import express from "express";
import bodyParser from "body-parser";
import {addItem, getItems, getTotalValue, removeItem} from "./controllers/inventoryController"

const app = express();
app.use(bodyParser.json());

app.post("/inventory", addItem);

app.delete("/inventory", removeItem);

app.get("/inventory", getItems);

app.get("/inventory/getTotalValue",getTotalValue);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});