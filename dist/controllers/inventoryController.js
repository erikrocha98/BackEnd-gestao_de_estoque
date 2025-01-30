"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = exports.removeItem = exports.addItem = void 0;
const inventoryServices_1 = require("../services/inventoryServices");
const service = new inventoryServices_1.InventoryService();
const addItem = (req, res) => {
    try {
        const { name, weight, price, quantity } = req.body;
        const item = { name, weight: parseFloat(weight), price: parseFloat(price), quantity: parseInt(quantity, 10) };
        service.addItem(item);
        res.status(201).send({ message: "Item adicionado com sucesso!" });
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.addItem = addItem;
const removeItem = (req, res) => {
    try {
        const { name } = req.body;
        service.removeItem(name);
        res.status(200).send({ message: "Item excluído com sucesso!" });
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.removeItem = removeItem;
const getItems = (req, res) => {
    try {
        const items = service.getItems();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getItems = getItems;
