import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { ImMusic, ImShare2 } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';


import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import { MainContentContexts } from '../UseContext/MainContentContext';
import { PlaynowContexts } from '../UseContext/PlaynowContext';

export function Navbar() {
    const { slidePageMobile, setSlidePageMobile, setHiddenPlayer, hiddenPlayer } = useContext(PlaynowContexts)
    const navegation = useNavigate()
    const [IstoggleMenu, setIsToggleMenu] = useState(false)
    const [openMenu, setOpenMenu] = useState<number | string>(0)

    function OpenAndCloseMenu() {
        if (!IstoggleMenu) {
            setOpenMenu('calc(100vh - 5rem)')
            setIsToggleMenu(true)
        }
        else {
            setOpenMenu(0)
            setIsToggleMenu(false)
        }
    }

    return (
        <>
            {/* Mobile designer*/}
            <div className={styles.containerMobile}>
                <div className={styles.buttonPlaylist}>
                    <button onClick={() => {
                        if (slidePageMobile == -800) {
                            setSlidePageMobile(0)
                            setHiddenPlayer('visible')
                        }

                    }}>
                        <ImMusic />
                    </button>
                </div>
                <div className={styles.menu}>
                    <img src={logo} alt="" />
                    <button className={styles.openMenu} onClick={() => {
                        OpenAndCloseMenu()
                    }}>
                        <span></span>
                    </button>
                </div>
                <div className={styles.menuOptions} style={{ height: `${openMenu}`, transition: '0.6s' }}>
                    <button>
                        <AiFillHome color='white' />
                        <p>Home</p>
                    </button>

                    <button>
                        <ImMusic color='white' />
                        <p>PlayList</p>
                    </button>

                    <button>
                        <AiFillStar color='white' />
                        <p>Favoritas</p>
                    </button>

                    <button>
                        <ImShare2 color='white' />
                        <p>Compartilhar</p>
                    </button>

                    <button>
                        <BsFillGearFill color='white' />
                        <p>Configure</p>
                    </button>
                </div>
            </div>
            {/* Mobile designer*/}        

            < div className={styles.container} >
                <div className={styles.buttons}>
                    <button onClick={() => {
                        navegation('/')
                    }}>
                        <AiFillHome color='white' />
                    </button>
                    <button>
                        <ImMusic color='white' />
                    </button>
                    <button>
                        <AiFillStar color='white' />
                    </button>
                    <button>
                        <ImShare2 color='white' />
                    </button>
                    <button>
                        <BsFillGearFill color='white' />
                    </button>
                </div>
            </div >
        </>
    )
}