import { Music } from "../entities/Music";

export interface IMusicsRepository{
    save(music:Music):Promise<void>
    listAllMusic():Promise<Object | null>
    searchMusic(keyFind: string):Promise<Object | null>
}