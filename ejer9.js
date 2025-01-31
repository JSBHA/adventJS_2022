function countTime(leds) {

    let time = 0;
    let allOn = false

    while (!allOn){
        time += 7;
        let newLeds = [...leds];

        for (let i = 1; i < leds.length; i++){
            if(leds[i] === 0 && leds[i - 1] === 1){
                newLeds[i] = 1;
            }
        }

        leds = newLeds;
        allOn = leds.every(led => led === 1);
    }
    return time;
  }

  console.log(countTime([0, 1, 1, 0, 1]))
  console.log(countTime([0, 0, 0, 1]));
  console.log(countTime([0, 0, 1, 0, 0]));