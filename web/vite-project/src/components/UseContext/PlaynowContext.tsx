import { createContext, ReactNode, useState } from "react";

interface PlaynowContextsData{
    isPlaying: boolean;
    setIsPlaying: (state:boolean) => void;
    indexPlaylist: number;
    setIndexPlaylist: (state:number) => void;
    isShuffle: boolean;
    setIsShuffle: (state:boolean) => void
}

interface PlaynowContextsProps{
    children: ReactNode
}







export const PlaynowContexts = createContext({} as PlaynowContextsData) 

export function PlaynowContextsProvider({children}:PlaynowContextsProps){
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [indexPlaylist, setIndexPlaylist] = useState(0)
    const [isShuffle, setIsShuffle] = useState(false)
    return(
        <PlaynowContexts.Provider value={{isPlaying, setIsPlaying, indexPlaylist, setIndexPlaylist, isShuffle, setIsShuffle}}>
            {children}
        </PlaynowContexts.Provider>
    )

}