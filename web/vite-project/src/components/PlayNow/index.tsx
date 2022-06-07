import { useEffect, useState } from 'react';


import Slider from 'rc-slider'
import { FiRepeat, FiSkipBack, FiSkipForward } from 'react-icons/fi'
import { BsFillPlayCircleFill, BsVolumeUp } from 'react-icons/bs'
import { BiShuffle } from 'react-icons/bi'


import 'rc-slider/assets/index.css'
import styles from '../PlayNow/styles.module.scss'

import img from '../../assets/list0.png';


export function PlayNow(){

    const [handleSlider, setHandleSlider] = useState<number | number[]>(0)
    

    useEffect(() =>{
       
    }, [])
    return(
        <div className={styles.container}>
            <h2>Tocando Agora</h2>
                <div className={styles.imgCover}>
                    <img src={img}alt="" />
                </div>
                <div className={styles.musicInfo}>
                    <p>Green day</p>
                    <p>American idiot</p>
                </div>
                <div className={styles.controllersBar}>
                  <span>0:00</span>  
                  <Slider
                    className={styles.slider}
                    max={100}
                    value={handleSlider}
                    onChange={(e)=>{
                        setHandleSlider(e)
                    }}
                    trackStyle={{ backgroundColor: '#434366' }}
                    railStyle={{ backgroundColor: '#ffffff'}}
                    handleStyle={{ borderColor: '#434366', borderWidth: 2, width:'20px', height:'20px', top:2.1, opacity: 1}}
                  />
                  <span>0:00</span>
                </div>
                <div className={styles.controllersButtons}>
                    <button className={styles.othersButtons}>
                        <BiShuffle />
                    </button>
                    <button className={styles.othersButtons}>
                        <FiSkipBack />
                    </button>
                    <button className={styles.playerButton}>
                        <BsFillPlayCircleFill />
                    </button>
                    <button className={styles.othersButtons}>
                        <FiSkipForward />
                    </button>
                    <button className={styles.othersButtons}>
                        <FiRepeat />
                    </button>
                    <button className={styles.othersButtons}>
                        <BsVolumeUp />
                    </button>
                </div>
            <div className={styles.playerlist}>
                <h1>Em fila</h1>
                <div className={styles.musicOfPlaylist}>
                    <div className={styles.musicDetailsOfPlaylist}>
                        <h3>Massacration</h3>
                        <p>Metal Bucetation</p>
                    </div>
                    <button>
                        <BsFillPlayCircleFill color='white'/>
                    </button>
                </div>
                <div className={styles.musicOfPlaylist}>
                    <div className={styles.musicDetailsOfPlaylist}>
                        <h3>Massacration</h3>
                        <p>Metal Bucetation</p>
                    </div>
                    <button>
                        <BsFillPlayCircleFill color='white'/>
                    </button>
                </div>
                <div className={styles.musicOfPlaylist}>
                    <div className={styles.musicDetailsOfPlaylist}>
                        <h3>Massacration</h3>
                        <p>Metal Bucetation</p>
                    </div>
                    <button>
                        <BsFillPlayCircleFill color='white'/>
                    </button>
                </div>
                <div className={styles.musicOfPlaylist}>
                    <div className={styles.musicDetailsOfPlaylist}>
                        <h3>Massacration</h3>
                        <p>Metal Bucetation</p>
                    </div>
                    <button>
                        <BsFillPlayCircleFill color='white'/>
                    </button>
                </div>
            </div>
        </div>
    )
}