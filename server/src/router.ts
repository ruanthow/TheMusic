import {Router, Response, Request} from 'express';
import { createMusicController } from './useCases/CreateMusic';
import { listMusicController } from './useCases/ListMusic';

const router = Router();

router.post("/music/create_music",(req:Request, res:Response) =>{
    createMusicController.execute(req, res)
})

router.get("/music/all_music", (req:Request, res:Response) => {
    listMusicController.execute(req, res)
})

export {router}