import { MusicRepositoryPrisma } from "../../repositories/prisma/MusicRepositoryPrisma";
import { CreateMusicController } from "./CreateMusicController";
import { CreateMusicUseCase } from "./CreateMusicUseCase";


const musicRepository = new MusicRepositoryPrisma()

const createMusicUseCase = new CreateMusicUseCase(musicRepository)

const createMusicController = new CreateMusicController(createMusicUseCase)

export{createMusicController}