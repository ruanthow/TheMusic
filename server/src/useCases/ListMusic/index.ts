import { MusicRepositoryPrisma } from "../../repositories/prisma/MusicRepositoryPrisma";
import { ListMusicController } from "./ListMusicController";
import { ListMusicUseCase } from "./ListMusicUseCase";



const musicRepositoryPrisma = new MusicRepositoryPrisma()

const listMusicUseCase = new ListMusicUseCase(musicRepositoryPrisma)

const listMusicController = new ListMusicController(listMusicUseCase)

export {listMusicController}