function Clock(hours,minutes,seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(hours,minutes,seconds)
        }, hours,minutes,seconds);
    })
}
async function tick(){
    let h =0;
    let m =0;
    let s =0;
    while(true){
        await Clock(1000)
        h++;
        m++;
        s++;
        console.clear();
        console.log(h,m,s)
       
        if (s === 60) {
            if (m === 60) {
              if (h === 24) {
                
                return false;
              }
              h++;
              m = 0;
              s = 0;
            } else {
              m++;
              s = 0;
            }
          } else {
            s++;
          }

        
    
        
    }

}
    tick();





