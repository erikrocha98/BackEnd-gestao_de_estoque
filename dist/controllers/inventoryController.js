"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalProducts = exports.getTotalItems = exports.getMeanWeight = exports.getMeanValue = exports.getTotalWeight = exports.getTotalValue = exports.getItems = exports.removeItem = exports.addItem = void 0;
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
const getTotalValue = (req, res) => {
    try {
        const totalValue = service.getTotalValue();
        res.status(200).json(totalValue);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getTotalValue = getTotalValue;
const getTotalWeight = (req, res) => {
    try {
        const totalValue = service.getTotalWeight();
        res.status(200).json(totalValue);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getTotalWeight = getTotalWeight;
const getMeanValue = (req, res) => {
    try {
        const result = service.getMeanValue();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getMeanValue = getMeanValue;
const getMeanWeight = (req, res) => {
    try {
        const result = service.getMeanWeight();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getMeanWeight = getMeanWeight;
const getTotalItems = (req, res) => {
    try {
        const result = service.getTotalItems();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getTotalItems = getTotalItems;
const getTotalProducts = (req, res) => {
    try {
        const result = service.getoTotalProducts();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).send({ error: error.message });
    }
};
exports.getTotalProducts = getTotalProducts;
