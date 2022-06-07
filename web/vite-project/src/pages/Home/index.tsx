
import { MainContent } from '../../components/MainContent';
import { Navbar } from '../../components/Navbar';
import { PlayNow } from '../../components/PlayNow';
import styles from './styles.module.scss';

export function Home(){
    return(
        <div className={styles.container}>
           <Navbar/>
           <MainContent />
           <PlayNow />
        </div>
    )
}