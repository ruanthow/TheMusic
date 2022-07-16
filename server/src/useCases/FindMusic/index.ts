import { MusicRepositoryPrisma } from "../../repositories/prisma/MusicRepositoryPrisma";
import { FindMusicController } from "./FindMusicController";
import { FindMusicUseCases } from "./FindMusicUseCases";



const musicRepository = new MusicRepositoryPrisma()

const findMusicUseCases = new FindMusicUseCases(musicRepository)

const findMusicController = new FindMusicController(findMusicUseCases)

export {findMusicController}