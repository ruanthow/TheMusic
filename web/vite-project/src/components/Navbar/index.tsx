import { useState } from 'react';
import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { ImMusic, ImShare2 } from 'react-icons/im'
import { BsFillGearFill } from 'react-icons/bs'

import styles from './styles.module.scss';

export function Navbar() {
    

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <button>
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
            <div>

            </div>
        </div>
    )
}