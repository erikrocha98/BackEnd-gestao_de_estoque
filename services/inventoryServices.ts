import{InventoryModel, Item} from "../models/inventoryModel";

export class InventoryService{
    private model: InventoryModel;
    
    constructor(){
        this.model = new InventoryModel();
    }

    public validateItem(item: Item) :void {
        if (!item.name || !item.price || !item.quantity || !item.weight){
            throw new Error ("Todos os atributos são obrigatórios");
        }
        if (item.price<=0){
            throw new Error("O preço deve ser maior que zero");
        }
        if(item.quantity<=0){
            throw new Error ("A quantidade deve ser maior que zero");
        }
        if (item.weight<=0){
            throw new Error("O peso deve ser maior que zero");
        }
    }
    public isUnique(name: string):boolean{
        const inventory= this.model.readInventory();
        return !inventory.some((item)=>item.name===name);
    }
    
    public addItem(item: Item):void{
        this.validateItem(item);
        if (!this.isUnique(item.name)){
            throw new Error("O item já existe no inventário");
        }
        this.model.addItem(item);
    }

    public removeItem(id:string):void{
        const inventory = this.model.readInventory();
        if (!inventory.find(item=>item.name===id)){
            throw new Error("O item a ser excluído não foi encontrado");
        }
        console.log(`Removendo item: ${id}`)
        this.model.removeItem(id);
    }

}