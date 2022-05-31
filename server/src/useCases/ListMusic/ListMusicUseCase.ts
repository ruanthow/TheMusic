import { IMusicsRepository } from "../../repositories/IMusicsRepository";

export class ListMusicUseCase {
    private musicRepository: IMusicsRepository
    constructor(
        musicRepository: IMusicsRepository
    ) {
        this.musicRepository = musicRepository
    }

    async execute() {
        const allList = await this.musicRepository.listAllMusic()

        return allList
    }
}