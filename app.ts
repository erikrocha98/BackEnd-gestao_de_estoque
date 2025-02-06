import express from "express";
import bodyParser from "body-parser";
import {addItem, getItems, getMeanValue, getMeanWeight, getTotalItems, getTotalProducts, getTotalValue, getTotalWeight, removeItem} from "./controllers/inventoryController"

const app = express();
app.use(bodyParser.json());

app.post("/inventory", addItem);

app.delete("/inventory", removeItem);

app.get("/inventory", getItems);

app.get("/inventory/totalValue", getTotalValue);

app.get("/inventory/totalWeight", getTotalWeight);

app.get("/inventory/meanValue", getMeanValue);

app.get("/inventory/meanWeight", getMeanWeight);

app.get("/inventory/totalItems", getTotalItems);

app.get("/inventory/totalProducts", getTotalProducts);



app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});