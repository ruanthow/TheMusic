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

    GetWidthWindowDevice: () => void

    windowWidth600:boolean
    setWindowWidth600: (state:boolean) => void
    
}

interface MainContentContextsProps{
    children : ReactNode
}

export const MainContentContexts = createContext({} as MainContentData)

export function MainContentContextProvider({children}:MainContentContextsProps){

    const [windowWidth600, setWindowWidth600] = useState<boolean>(false)
    const [currentMusic, setCurrentMusic] = useState<MusicType>()
    const [myPlaylist, setMyPlaylist] = useState([])
    
    function GetWidthWindowDevice(){
        if(window.innerWidth <= 600){
            setWindowWidth600(true)
        }
        else{
            setWindowWidth600(false)
        }
    }
    return(
       <MainContentContexts.Provider value={{GetWidthWindowDevice, windowWidth600, setWindowWidth600 , currentMusic, setCurrentMusic, myPlaylist, setMyPlaylist}}>
           {children}
       </MainContentContexts.Provider>
    )
}
