import fs, { existsSync } from "fs";
import path from "path";

const fileCsv = path.join(__dirname, "../data/estoque.csv");

export interface Item {
    name: string;
    weight: number;
    price: number;
    quantity: number;
}

export class InventoryModel{
    constructor(){
        this.fileExists();
    }
    private fileExists():void{
        if(!fs.existsSync(fileCsv)){
            fs.writeFileSync(fileCsv, "nome,peso,preco,quantidade\n");
        }
    }
    
    public readInventory(): Item[]{
        const data = fs.readFileSync(fileCsv, "utf-8").trim();
        const rows = data.split("\n").slice(1);
        return rows.map((row)=>{
            const [name, weight, price,quantity]=row.split(",");
            return{name, weight:parseFloat(weight),price:parseFloat(price),quantity:parseInt(quantity,10)}
        });
    }

    public addItem(item: Item): void{
        const row=`${item.name},${item.weight},${item.price},${item.quantity}\n`;
        fs.appendFileSync(fileCsv,row);
    }
}
