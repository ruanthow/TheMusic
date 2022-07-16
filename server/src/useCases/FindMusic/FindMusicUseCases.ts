import { IMusicsRepository } from "../../repositories/IMusicsRepository";





export class FindMusicUseCases{
    private musicRepository: IMusicsRepository

    constructor(musicRepository: IMusicsRepository){
        this.musicRepository = musicRepository
    }

    async execute(keyFind:string){
        const result = this.musicRepository.searchMusic(keyFind)

        return result
    }
}