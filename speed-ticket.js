function checkspeed (speed,limit=70)  {
    
    if (speed >= 75 && speed <130) {
       return (Math.floor((speed-limit)/5))+ ' Points ';
    }
    else if (speed >= 130){
         return 'License is suspended';
    }
    else return 'No Points ';

};

console.log(checkspeed(144));