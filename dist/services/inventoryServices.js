"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const inventoryModel_1 = require("../models/inventoryModel");
class InventoryService {
    constructor() {
        this.model = new inventoryModel_1.InventoryModel();
    }
    ;
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
    ;
    isUnique(name) {
        const inventory = this.model.readInventory();
        return !inventory.some((item) => item.name === name);
    }
    ;
    addItem(item) {
        this.validateItem(item);
        if (!this.isUnique(item.name)) {
            throw new Error("O item já existe no inventário");
        }
        this.model.addItem(item);
    }
    ;
    removeItem(id) {
        const inventory = this.model.readInventory();
        if (!inventory.find(item => item.name === id)) {
            throw new Error("O item a ser excluído não foi encontrado");
        }
        console.log(`Removendo item: ${id}`);
        this.model.removeItem(id);
    }
    ;
    getItems() {
        console.log("Exibindo items...");
        return this.model.getItems();
    }
    ;
    getTotalValue() {
        console.log("Exibindo valor total...");
        const total = this.model.getTotalValue().reduce((soma, num_atual) => soma + num_atual, 0);
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total);
    }
    ;
    getTotalWeight() {
        console.log("Exibindo peso total...");
        const rows = this.model.readInventory();
        const parcialValue = rows.map((row) => row.quantity * row.weight);
        const totalValue = parcialValue.reduce((soma, num_atual) => soma + num_atual, 0);
        return `${totalValue} kg`;
    }
    ;
    getMeanValue() {
        console.log("Exibindo média dos valores...");
        const rows = this.model.readInventory();
        const items = rows.map((row) => {
            return row.quantity * 1;
        });
        const somaValue = this.model.getTotalValue().reduce((soma, num_atual) => soma + num_atual, 0);
        const somaItems = items.reduce((soma, num_atual) => soma + num_atual, 0);
        const mean = somaValue / somaItems;
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(mean);
    }
    ;
    getMeanWeight() {
        console.log("Exibindo média dos valores...");
        const rows = this.model.readInventory();
        const parcialValue = rows.map((row) => row.quantity * row.weight);
        const somaWeight = parcialValue.reduce((soma, num_atual) => soma + num_atual, 0);
        const items = rows.map((row) => {
            return row.quantity * 1;
        });
        const somaItems = items.reduce((soma, num_atual) => soma + num_atual, 0);
        const mean = somaWeight / somaItems;
        return `${mean.toFixed(2)} kg`;
    }
    ;
    getTotalItems() {
        console.log("Exibindo total de items...");
        const rows = this.model.readInventory();
        const items = rows.map((row) => {
            return row.quantity * 1;
        });
        const somaItems = items.reduce((soma, num_atual) => soma + num_atual, 0);
        return `${somaItems} items no inventário`;
    }
    ;
    getoTotalProducts() {
        console.log("Exibindo total de produtos...");
        const rows = this.model.readInventory();
        const totalProdutos = rows.length;
        return `${totalProdutos} produtos únicos no inventário`;
    }
}
exports.InventoryService = InventoryService;
