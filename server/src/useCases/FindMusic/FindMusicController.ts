import { Request, Response } from "express";
import { FindMusicUseCases } from "./FindMusicUseCases";






export class FindMusicController{
    private findusicUseCases:FindMusicUseCases
    
    constructor(findMusicUseCases:FindMusicUseCases){
        this.findusicUseCases = findMusicUseCases
    }

    async execute(req:Request, res:Response){

        const {keyFind} = req.body

        try {
           const result = await this.findusicUseCases.execute(keyFind)
            return res.json(result)
            
        } catch (error) {
            return res.status(400).json({
                message: "error.message"
            })
        }
    }
}