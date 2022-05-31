
import {Request, Response} from 'express'
import { ListMusicUseCase } from './ListMusicUseCase'


export class ListMusicController{
    public listAllMusicUseCase : ListMusicUseCase

    constructor(
        listAllMusicUseCase: ListMusicUseCase
    ){
        this.listAllMusicUseCase = listAllMusicUseCase
    }

    async execute(req:Request, res:Response){
        
       const allList = await this.listAllMusicUseCase.execute()
       
       res.json(allList)
    }
}

