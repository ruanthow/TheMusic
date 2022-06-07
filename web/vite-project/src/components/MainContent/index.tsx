import { Key, useEffect, useState } from 'react'


import { QueryClient, useQuery } from 'react-query'
import axios from 'axios';

import styles from './styles.module.scss';

import { BsSearch } from 'react-icons/bs'
import { AiOutlinePlayCircle, AiOutlineBars } from 'react-icons/ai'

import list0 from '../../assets/list0.png';

import list1 from '../../assets/list1.png';

interface MusicType {
    nameMusic: string;
    nameBand: string;
    album: string;
    audio: string;
    minutes: number;
    imagem: string;
}

export function MainContent() {

    const { data } = useQuery('getTopMusics', async function getTopMusics() {
        try {
            const response = await axios.get("http://localhost:3333/music/all_music")
            return response.data

        }
        catch (error: any) {
            throw new Error(error.message)
        }
    }, {
        staleTime: 1000 * 60 * 60
    })

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Home</h1>
                <form action="search">
                    <input type="text" />
                    <button type='submit'><BsSearch color='white' /></button>
                </form>
            </div>
            <div className={styles.topMusics}>
                {data?.map((music: MusicType, key: Key) => {
                    return (
                        <div key={key} className={styles.music}>
                            <div className={styles.musicImage}>
                                <img src={music.imagem} alt="capa do album" />
                            </div>
                            <div className={styles.musicDetails}>
                                <p>{music.nameBand}</p>
                                <p>{music.nameMusic}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.topMusicAndPlaylist}>
                <div className={styles.lastMusics}>
                    <h1>Mais Tocadas</h1>
                    <div className={styles.listLastMusicsCard}>
                        {data?.map((music: MusicType, key: Key) => {
                            return (
                                <div className={styles.listLastMusics}>
                                    <div key={key} className={styles.lastMusic}>
                                        <div className={styles.lastMusicImage}>
                                            <img src={music.imagem} alt="" />
                                        </div>
                                        <div className={styles.lastMusicDetails}>
                                            <p>{music.nameBand}</p>
                                            <p>{music.nameMusic}</p>
                                        </div>
                                    </div>
                                    <div className={styles.lastMusicButtons}>
                                        <button>
                                            <AiOutlinePlayCircle color='white' />
                                        </button>
                                        <button>
                                            <AiOutlineBars color='white' />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.playlistCard}>
                    <h1>Playlists</h1>
                    <div className={styles.playlist}>
                        <div>
                            <img src={list0} alt="" />
                        </div>
                        <div>
                            <img src={list1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}