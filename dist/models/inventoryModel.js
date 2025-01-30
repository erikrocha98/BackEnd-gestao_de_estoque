"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModel = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fileCsv = path_1.default.join(__dirname, "../data/estoque.csv");
class InventoryModel {
    constructor() {
        this.fileExists();
    }
    fileExists() {
        if (!fs_1.default.existsSync(fileCsv)) {
            fs_1.default.writeFileSync(fileCsv, "name,weight,price,quantity\n", "utf-8");
        }
    }
    readInventory() {
        const data = fs_1.default.readFileSync(fileCsv, "utf-8").trim();
        if (!data) {
            return [];
        }
        const rows = data.split("\n").slice(1);
        return rows.map((row) => {
            const [name, weight, price, quantity] = row.split(",");
            return { name, weight: parseFloat(weight), price: parseFloat(price), quantity: parseInt(quantity, 10) };
        });
    }
    writeInventory(items) {
        const header = "name,weight,price,quantity\n";
        const data = items.map((item) => `${item.name},${item.weight},${item.price},${item.quantity}`).join("\n");
        fs_1.default.writeFileSync(fileCsv, header + data, "utf8");
    }
    addItem(item) {
        const row = `${item.name},${item.weight},${item.price},${item.quantity}\n`;
        fs_1.default.appendFileSync(fileCsv, row);
    }
    removeItem(id) {
        const rows = this.readInventory();
        const filteredRows = rows.filter((item) => {
            return item.name != id;
        });
        this.writeInventory(filteredRows);
    }
    ;
    getItems() {
        const rows = this.readInventory();
        return rows;
    }
}
exports.InventoryModel = InventoryModel;
