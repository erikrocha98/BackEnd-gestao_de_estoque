"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const inventoryModel_1 = require("../models/inventoryModel");
class InventoryService {
    constructor() {
        this.model = new inventoryModel_1.InventoryModel();
    }
    validateItem(item) {
        if (!item.name || !item.price || !item.quantity || !item.weight) {
            throw new Error("Todos os atributos são obrigatórios");
        }
        if (item.price <= 0) {
            throw new Error("O preço deve ser maior que zero");
        }
        if (item.quantity <= 0) {
            throw new Error("A quantidade deve ser maior que zero");
        }
        if (item.weight <= 0) {
            throw new Error("O peso deve ser maior que zero");
        }
    }
    isUnique(name) {
        const inventory = this.model.readInventory();
        return !inventory.some((item) => item.name === name);
    }
    addItem(item) {
        this.validateItem(item);
        if (!this.isUnique(item.name)) {
            throw new Error("O item já existe no inventário");
        }
        this.model.addItem(item);
    }
    removeItem(id) {
        const inventory = this.model.readInventory();
        if (!inventory.find(item => item.name === id)) {
            throw new Error("O item a ser excluído não foi encontrado");
        }
        console.log(`Removendo item: ${id}`);
        this.model.removeItem(id);
    }
    getItems() {
        console.log("Exibindo items...");
        return this.model.getItems();
    }
}
exports.InventoryService = InventoryService;
