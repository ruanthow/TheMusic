import { Music } from "../../entities/Music";
import { IMusicsRepository } from "../../repositories/IMusicsRepository";
import {CreateMusicType} from './CreateMusicType'


export class CreateMusicUseCase{
    private musicRepository: IMusicsRepository

    constructor(musicRepository:IMusicsRepository){
        this.musicRepository = musicRepository
    }

    async execute({nameMusic, nameBand, audio, album, minutes, imagem}:CreateMusicType){
        const music = new Music({
            nameMusic,
            nameBand,
            audio,
            album,
            minutes,
            imagem
        })

        return await this.musicRepository.save(music)
    }
}