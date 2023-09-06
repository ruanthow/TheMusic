import {createContext, ReactNode, useState} from 'react'

interface MusicType {
    nameMusic: string;
    nameBand: string;
    album: string;
    audio: string;
    minutes: number;
    imagem: string;
}

interface MainContentData{
    currentMusic: MusicType | undefined
    setCurrentMusic: (state:MusicType) => void

    myPlaylist: Array<MusicType>
    setMyPlaylist: (state:any) => void

}

interface MainContentContextsProps{
    children : ReactNode
}

export const MainContentContexts = createContext({} as MainContentData)

export function MainContentContextProvider({children}:MainContentContextsProps){

    const [currentMusic, setCurrentMusic] = useState<MusicType>()
    const [myPlaylist, setMyPlaylist] = useState([])
    
    return(
       <MainContentContexts.Provider value={{currentMusic, setCurrentMusic, myPlaylist, setMyPlaylist}}>
           {children}
       </MainContentContexts.Provider>
    )
}
