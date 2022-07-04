export function convertToMinToSec(duration:number){
   
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    
    const timingString = [minutes, seconds].map(unit =>{
        return String(unit).padStart(2, '0')
     }).join(':')
    
     return timingString;

}