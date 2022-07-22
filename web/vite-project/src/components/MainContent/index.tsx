

import { Key, useContext, useRef, useState} from 'react'
import { useQuery } from 'react-query'
import { MainContentContexts } from '../UseContext/MainContentContext';
import {useNavigate} from 'react-router-dom'

import axios from 'axios';


import styles from './styles.module.scss';
import { BsSearch } from 'react-icons/bs'
import { AiOutlinePlayCircle, AiOutlineBars } from 'react-icons/ai'
import list from '../../assets/list0.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PlaynowContexts } from '../UseContext/PlaynowContext';




interface MusicType {
    nameMusic: string;
    nameBand: string;
    album: string;
    audio: string;
    minutes: number;
    imagem: string;
}

export function MainContent() {

    const navegation = useNavigate()
    const [keyQuery, setKeyQuery] = useState<string | ''>()
    const [resultKeyQuery, setResultKeyQuery] = useState<Array<Object>>()
    const carroseul = useRef<HTMLDivElement | null>(null);
    const { setMyPlaylist } = useContext(MainContentContexts)
    const { setIndexPlaylist } = useContext(PlaynowContexts)
    
    const { data } = useQuery('getTopMusics', async function getTopMusics() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_LOCAL_CONECTION}music/all_music`)
            return response.data

        }
        catch (error: any) {
            throw new Error(error.message)
        }
    }, {
        staleTime: 1000 * 60 * 60
    })

    async function SearchSong(){
        navegation(`search?key=${keyQuery}`)
        const respose = await axios.post(`${import.meta.env.VITE_LOCAL_CONECTION}search?key=${keyQuery}`)
        setResultKeyQuery(respose.data)
        
    }


    function ArrowRightTopMusic() {
        if (carroseul.current) {
            carroseul.current.scrollLeft += carroseul.current.offsetWidth;
            
        }

    }
    function ArrowLeftTopMusic() {
        if (carroseul.current) {
            carroseul.current.scrollLeft -= carroseul.current.offsetWidth;

        }
    }

    function handleMoveToPlaylist(intoMusicFromPlayist: MusicType) {
        setMyPlaylist((results) => [...results, intoMusicFromPlayist])
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainBody}>
                <div className={styles.header}>
                    <h1>Home</h1>
                    <form action="search">
                        <input type="text" onChange={(e)=>{
                            setKeyQuery(e.target.value)
                        }}/>
                        <button type='submit' onClick={(e) => {
                          e.preventDefault()
                          SearchSong()
                        }}>
                            <BsSearch color='white' />
                        </button>
                    </form>
                </div>
                <div className={styles.topMusics} ref={carroseul}>
                    { resultKeyQuery == null ? data?.map((music: MusicType, key: Key) => {
                        return (
                            <div
                                key={key}
                                className={styles.music}
                                    onClick={() => {
                                    setIndexPlaylist(0)
                                    setMyPlaylist([music])     
                                }}
                            >
                                <div className={styles.musicImage}>
                                    <img src={music.imagem} alt="capa do album" />
                                </div>
                                <div className={styles.musicDetails}>
                                    <p>{music.nameBand}</p>
                                    <p>{music.nameMusic}</p>
                                </div>
                            </div>
                        )
                    })
                    :
                    resultKeyQuery?.map((music: MusicType, key: Key) => {
                        return (
                            <div
                                key={key}
                                className={styles.music}
                                    onClick={() => {
                                    setIndexPlaylist(0)
                                    setMyPlaylist([music])     
                                }}
                            >
                                <div className={styles.musicImage}>
                                    <img src={music.imagem} alt="capa do album" />
                                </div>
                                <div className={styles.musicDetails}>
                                    <p>{music.nameBand}</p>
                                    <p>{music.nameMusic}</p>
                                </div>
                            </div>
                        )
                    })

                }
                </div>
                <div className={styles.buttonsArrows}>
                    <div className={styles.buttonArrowLeft} onClick={ArrowLeftTopMusic}>
                        <IoIosArrowBack color='white' />
                    </div>
                    <div className={styles.buttonArrowRight} onClick={ArrowRightTopMusic}>
                        <IoIosArrowForward color='white' />
                    </div>
                </div>
                <h3>Mais Tocadas</h3>
                <div className={styles.footer}>
                    <div className={styles.maisTocadas}>
                        {data?.map((music: MusicType, key: Key) => {
                            return (
                                <div className={styles.dataItem} key={key}>
                                    <img src={music.imagem} alt="Capa do Album" />
                                    <div className={styles.itemDetails}>
                                        <p>{music.nameBand}</p>
                                        <p>{music.nameMusic}</p>
                                    </div>
                                    <button className={styles.buttonPlay}>
                                        <AiOutlinePlayCircle color='white' />
                                    </button>
                                    <div className={styles.dropdown}>
                                        <button className={styles.dropbtn}><AiOutlineBars/></button>
                                        <div className={styles.dropdownContent}>
                                            <button onClick={() => {
                                                
                                                handleMoveToPlaylist(music)

                                            }}>Adicionar a Playlist</button>
                                            <button>Favoritar musica</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.playLists}>
                        <img src={list} alt="" />
                        <img src={list} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}