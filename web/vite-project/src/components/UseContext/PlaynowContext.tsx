import { createContext, ReactNode, useState } from "react";

interface PlaynowContextsData{
    isPlaying: boolean;
    setIsPlaying: (state: boolean) => void;
    indexPlaylist: number;
    setIndexPlaylist: (state: number) => void;
    isShuffle: boolean;
    setIsShuffle: (state: boolean) => void;
    isLooping: boolean;
    setIsLooping: (state: boolean) => void;
    isShowList: boolean;
    setIsShowList: (state: boolean) => void;
    slidePageMobile: number;
    setSlidePageMobile: (state:number) => void;
    hiddenPlayer: 'visible' | 'hidden' | 'collapse';
    setHiddenPlayer:(state: 'visible' | 'hidden' | 'collapse') => void;
}

interface PlaynowContextsProps{
    children: ReactNode
}







export const PlaynowContexts = createContext({} as PlaynowContextsData) 

export function PlaynowContextsProvider({children}:PlaynowContextsProps){
    const [slidePageMobile, setSlidePageMobile] = useState<number>(-800);
    const [hiddenPlayer, setHiddenPlayer] = useState<'visible' | 'hidden' | 'collapse'>('visible')
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [indexPlaylist, setIndexPlaylist] = useState(0)
    const [isShuffle, setIsShuffle] = useState(false)
    const [isLooping, setIsLooping] = useState(false)
    const [isShowList, setIsShowList] = useState(true)
    return(
        <PlaynowContexts.Provider value={{hiddenPlayer, setHiddenPlayer, slidePageMobile, setSlidePageMobile, isPlaying, setIsPlaying, indexPlaylist, setIndexPlaylist, isShuffle, setIsShuffle, isLooping, setIsLooping, isShowList, setIsShowList}}>
            {children}
        </PlaynowContexts.Provider>
    )

}