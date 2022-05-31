import { Music } from "../../entities/Music";
import { IMusicsRepository } from "../IMusicsRepository";
import { prisma } from "../../prisma";

export class MusicRepositoryPrisma implements IMusicsRepository{
    
    async listAllMusic(): Promise<Object | null> {
        const allMusics = await prisma.music.findMany()
        return allMusics
    }

    async save({id, nameMusic, nameBand, album, audio, minutes, imagem }: Music): Promise<void> {
        await prisma.music.create({
              data: {
                 id,
                 nameMusic,
                 nameBand,
                 album,
                 audio,
                 minutes,
                 imagem
              }
          })
      }
}