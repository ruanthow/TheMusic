import { CreateMusicUseCase } from "./CreateMusicUseCase";
import { Request, Response } from "express";



export class CreateMusicController{
    private createMusicUseCase: CreateMusicUseCase
    constructor(createMusicUseCase: CreateMusicUseCase){
        this.createMusicUseCase = createMusicUseCase
    }

    async execute(req:Request, res:Response){
        
        const {nameMusic, nameBand, album, minutes, audio, imagem} = req.body;
        
        try {
            await this.createMusicUseCase.execute({
                nameMusic,
                nameBand, 
                album, 
                minutes, 
                audio,
                imagem
            })
            
            return res.status(201).json({
                message:'Cadastrado com sucesso'
            })
            
        } catch (error) {

         return res.status(400).json({
             message: "Algo deu errado preencha os campos corretamente"
         })
        }
    }
}