import fs, { existsSync } from "fs";
import path from "path";

const fileCsv = path.join(__dirname,"../data/estoque.csv");

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
            fs.writeFileSync(fileCsv, "name,weight,price,quantity\n", "utf-8");
        }
    }
    
    public readInventory(): Item[]{
        const data = fs.readFileSync(fileCsv, "utf-8").trim();
        if (!data){
            return [];
        }
        const rows = data.split("\n").slice(1);
        return rows.map((row)=>{
            const [name, weight, price,quantity]=row.split(",");
            return{name, weight:parseFloat(weight),price:parseFloat(price),quantity:parseInt(quantity,10)}
        });
    }

    public writeInventory(items: Item[]):void{
        const header = "name,weight,price,quantity\n"
        const data = items.map((item)=>`${item.name},${item.weight},${item.price},${item.quantity}`).join("\n");
        fs.writeFileSync(fileCsv,header+data,"utf8");
    }

    public addItem(item: Item): void{
        const row=`${item.name},${item.weight},${item.price},${item.quantity}\n`;
        fs.appendFileSync(fileCsv,row);
    }

    public removeItem(id:string):void{
        const rows = this.readInventory();
        const filteredRows= rows.filter((item) => {
            return item.name!=id;
        });
        this.writeInventory(filteredRows);     
    };
}
