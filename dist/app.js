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
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
