import {Request, Response} from "express";
import { InventoryService } from "../services/inventoryServices";

const service = new InventoryService();

export const addItem = (req: Request, res: Response): void => {
    try {
        const{name,weight,price,quantity} = req.body;
        const item = {name, weight: parseFloat(weight), price:parseFloat(price), quantity:parseInt(quantity,10)};
        service.addItem(item);
        res.status(201).send({message:"Item adicionado com sucesso!"});

    } catch (error:any) {
        res.status(400).send({error: error.message});
        
    }
};
export const removeItem = (req: Request, res: Response): void =>{
    try {
        const{name}=req.body;
        service.removeItem(name);
        res.status(200).send({message:"Item excluído com sucesso!"});
    } catch (error:any) {
        res.status(400).send({error:error.message});
        
    }
};
export const getItems = (req: Request, res:Response): void =>{
    try {
        const items = service.getItems();
        res.status(200).json(items);
    } catch (error:any) {
        res.status(400).send({error: error.message});
    }
};
export const getTotalValue = (req:Request,res:Response):void=>{
    try {
        const totalValue=service.getTotalValue();
        res.status(200).json(totalValue);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
};
export const getTotalWeight = (req:Request, res:Response):void=>{
    try {
        const totalValue=service.getTotalWeight();
        res.status(200).json(totalValue);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
};
export const getMeanValue = (req:Request, res:Response): void =>{
    try {
        const result = service.getMeanValue();
        res.status(200).json(result);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
};
export const getMeanWeight = (req:Request,res:Response):void=>{
    try {
        const result = service.getMeanWeight();
        res.status(200).json(result);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
};
export const getTotalItems=(req:Request,res:Response): void =>{
    try {
        const result = service.getTotalItems();
        res.status(200).json(result);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
};
export const getTotalProducts=(req:Request,res:Response):void => {
    try {
        const result = service.getoTotalProducts();
        res.status(200).json(result);
    } catch (error:any) {
        res.status(400).send({error:error.message});
    }
}

