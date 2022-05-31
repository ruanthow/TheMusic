import { randomUUID } from 'crypto';

export class Music {
    id?: string;
    nameMusic: string;
    nameBand: string;
    album: string;
    minutes: number;
    audio: string;
    imagem: string;
    
    
    constructor(props: Music) {
            this.id = props.id,
            this.album = props.album,
            this.audio = props.audio,
            this.nameMusic = props.nameMusic,
            this.nameBand = props.nameBand,
            this.minutes = props.minutes,
            this.imagem = props.imagem

        if (!props.id) {
            props.id = randomUUID()
        }
        
    }
    
}