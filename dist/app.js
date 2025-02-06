"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const inventoryController_1 = require("./controllers/inventoryController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.post("/inventory", inventoryController_1.addItem);
app.delete("/inventory", inventoryController_1.removeItem);
app.get("/inventory", inventoryController_1.getItems);
app.get("/inventory/totalValue", inventoryController_1.getTotalValue);
app.get("/inventory/totalWeight", inventoryController_1.getTotalWeight);
app.get("/inventory/meanValue", inventoryController_1.getMeanValue);
app.get("/inventory/meanWeight", inventoryController_1.getMeanWeight);
app.get("/inventory/totalItems", inventoryController_1.getTotalItems);
app.get("/inventory/totalProducts", inventoryController_1.getTotalProducts);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
