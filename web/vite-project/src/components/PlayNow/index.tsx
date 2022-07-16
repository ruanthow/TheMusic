import { Key, useContext, useEffect, useRef, useState } from 'react';


import Slider from 'rc-slider'
import { FiRepeat, FiSkipBack, FiSkipForward } from 'react-icons/fi'
import { BsFillPlayCircleFill, BsVolumeUp, BsPauseCircleFill } from 'react-icons/bs'
import { BiShuffle } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'


import 'rc-slider/assets/index.css'
import styles from '../PlayNow/styles.module.scss'

import { MainContentContexts } from '../UseContext/MainContentContext';
import { convertToMinToSec } from '../../util/ParseToMinToSec';

import logo from '../../assets/logo.png'
import { PlaynowContexts } from '../UseContext/PlaynowContext';




export function PlayNow() {
    const { myPlaylist, setMyPlaylist } = useContext(MainContentContexts)
    const { indexPlaylist, isPlaying, setIndexPlaylist, setIsPlaying, isShuffle, setIsShuffle, isLooping, setIsLooping, isShowList, setIsShowList } = useContext(PlaynowContexts)
    const [progress, setProgress] = useState<number>()
    const [isHiddenSliderVolume, setIsHiddenSliderVolume] = useState<boolean>(false)

    const [volume, setVolume] = useState<number>(10)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    function Progress() {
        if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.addEventListener('timeupdate', () => {
                setProgress(Math.floor(audioRef.current.currentTime));
            })
        }
    }

    function HandleBarProgress(value: number) {
        if (audioRef.current) {
            audioRef.current.currentTime = value
        }
    }

    function PlayExecute(value: boolean) {
        setIsPlaying(!value)
    }

    function PlaySongOfPlaylist(e: number) {
        setIndexPlaylist(e)
    }

    function Shuffle(value: boolean) {
        setIsShuffle(!value)
    }

    function SkipSong() {
        if (!isShuffle) {
            if (myPlaylist.length - 1 >= indexPlaylist + 1) {
                setIndexPlaylist(indexPlaylist + 1)
            }
            else {
                alert("A lista chegou ao fim adicione mais musicas")
            }
        }

        else if (isShuffle) {
            let nextNumber: number = Math.floor(Math.random() * myPlaylist.length);
            let safeNumber: number = Math.floor(Math.random() * myPlaylist.length);
            let currentNumber: number

            if (nextNumber != currentNumber) {
                currentNumber = nextNumber
                setIndexPlaylist(currentNumber)
            }
            else {
                setIndexPlaylist(safeNumber)
            }

        }
    }

    function BackSong() {
        if (indexPlaylist >= 1) {
            setIndexPlaylist(indexPlaylist - 1)
        }
        else {
            alert("Já está na primeira musica")
        }
    }

    function VerifyEndSong() {

        audioRef.current.currentTime = 0
        LoopPlay()
        if (!isShuffle) {
            if (myPlaylist.length - 1 >= indexPlaylist + 1) {
                setIndexPlaylist(indexPlaylist + 1)
                setIsPlaying(true)
            }
        }
        else {

            let nextNumber: number = Math.floor(Math.random() * myPlaylist.length);
            let safeNumber: number = Math.floor(Math.random() * myPlaylist.length);
            let currentNumber: number

            if (nextNumber != currentNumber) {
                currentNumber = nextNumber
                setIndexPlaylist(currentNumber)
            }
            else {
                setIndexPlaylist(safeNumber)
            }
        }

    }

    function HandleVolume(value: number) {
        if (audioRef.current) {
            let volume = value
            setVolume(volume)
            audioRef.current.volume = volume * 0.1
        }

    }

    function HidenSliderVolume() {
        if (audioRef.current && !isHiddenSliderVolume) {
            setIsHiddenSliderVolume(true)
        }
        else if (audioRef.current && isHiddenSliderVolume) {
            setIsHiddenSliderVolume(false)
        }
    }

    function RemoveSongOfPlaylist(value) {

        setIndexPlaylist(0)
        setMyPlaylist((products: []) => [...products.slice(0, value), ...products.slice(value + 1, products.length)])
        if (myPlaylist.length == 1) {
            audioRef.current.src = "null"
        }
    }

    function LoopPlay() {
        if (isLooping) {
            if (indexPlaylist + 1 == myPlaylist.length) {
                setIndexPlaylist(0)

            }
        }
    }

    function ShowListOfSongs(value) {
        setIsShowList(!value)
    }

    useEffect(() => {

        if (!audioRef.current) {
            return
        }
        if (isPlaying) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }

    }, [isPlaying])

    useEffect(() => {
        if (isLooping) {
            setIsShuffle(false)
        }
        else if (isShuffle) {
            setIsLooping(false)
        }
    })
    return (

        <div className={styles.container}>
            <h2>{myPlaylist[indexPlaylist]?.imagem ? "Tocando Agora" : "Selecione uma musica"}</h2>
            <div className={styles.imgCover}>
                <img src={myPlaylist[indexPlaylist]?.imagem ? myPlaylist[indexPlaylist].imagem : logo} alt="" />
            </div>
            <div className={styles.musicInfo}>
                <p>{myPlaylist[indexPlaylist]?.nameBand}</p>
                <p>{myPlaylist[indexPlaylist]?.nameMusic}</p>
            </div>
            <div className={styles.controllersBar}>
                <audio
                    ref={audioRef}
                    src={myPlaylist[indexPlaylist]?.audio}
                    onLoadedMetadata={Progress}
                    onEnded={VerifyEndSong}
                    onPlay={() => { setIsPlaying(true) }}
                    onPause={() => { setIsPlaying(false) }}
                    autoPlay

                />
                <span>{convertToMinToSec(progress ?? 0)}</span>
                <Slider
                    className={styles.slider}
                    max={myPlaylist[indexPlaylist]?.minutes}
                    value={progress}
                    onChange={(e:any) => {
                        HandleBarProgress(e)
                    }}

                    trackStyle={{ backgroundColor: '#434366' }}
                    railStyle={{ backgroundColor: '#ffffff' }}
                    handleStyle={{ borderColor: '#434366', borderWidth: 2, width: '20px', height: '20px', top: 2.1, opacity: 1 }}
                />
                <span>{convertToMinToSec(myPlaylist[indexPlaylist]?.minutes ?? 0)}</span>
            </div>
            <div className={styles.controllersButtons}>
                <button className={styles.othersButtons} onClick={() => {
                    ShowListOfSongs(isShowList)
                }} >
                    {isShowList ? <FaListUl color="white" /> : <FaListUl />}
                </button>

                <button className={styles.othersButtons} onClick={() => {
                    Shuffle(isShuffle)
                }}
                >
                    {isShuffle ? <BiShuffle color='white' /> : <BiShuffle />}
                </button>

                <button className={styles.othersButtons} onClick={BackSong}>
                    <FiSkipBack />
                </button>

                <button
                    className={styles.playerButton}
                    onClick={() => {
                        PlayExecute(isPlaying)
                    }}
                >
                    {isPlaying ? <BsPauseCircleFill color='white' /> : <BsFillPlayCircleFill />}
                </button>

                <button className={styles.othersButtons} onClick={SkipSong}>
                    <FiSkipForward />
                </button>

                <button onClick={() => {
                    setIsLooping(!isLooping)
                }} className={styles.othersButtons}>
                    {isLooping ? <FiRepeat color='white' /> : <FiRepeat />}
                </button>

                <button className={styles.othersButtons} onClick={HidenSliderVolume}>
                    {isHiddenSliderVolume ? <BsVolumeUp color='white' /> : <BsVolumeUp />}
                </button>

                <Slider
                    className={isHiddenSliderVolume ? styles.sliderVolume : styles.sliderVolumeHidden}
                    disabled={!isHiddenSliderVolume}
                    max={10}
                    min={0}
                    value={volume}
                    onChange={(e:any) => {
                        HandleVolume(e)
                    }}
                    trackStyle={{ backgroundColor: '#434366' }}
                    railStyle={{ backgroundColor: '#ffffff' }}
                    handleStyle={{ borderColor: '#434366', borderWidth: 2, width: '15px', height: '15px', top: 5, opacity: 1 }}
                />
            </div>
            {
                isShowList ?
                    <>
                        <div className={styles.titleOfList}>
                            <p>Em fila</p>
                        </div>
                        <div className={styles.playerlist}>
                            {myPlaylist.map((musicOflist, key: number) => {
                                return (
                                    <div key={key} className={styles.musicOfPlaylist}>
                                        <div className={styles.musicDetailsOfPlaylist}>
                                            <h3>{musicOflist.nameBand}</h3>
                                            <p>{musicOflist.nameMusic}</p>
                                        </div>
                                        <button onClick={() => { PlaySongOfPlaylist(key) }}>
                                            <BsFillPlayCircleFill color='white' />
                                        </button>
                                        <button className={styles.buttonRemoveItem} onClick={() => {
                                            RemoveSongOfPlaylist(key)
                                        }}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                )
                            })

                            }
                        </div>
                    </> 
                    :
                    <>
                    </> 
            }
        </div>
    )
}