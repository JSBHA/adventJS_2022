function getMaxGifts(giftsCities, maxGifts, maxCities) {

    const result = [];

    const bag = (start, combination) => {
        if (combination.length > maxCities) return;
        const totalGifts = combination.reduce((a, b) => a + b, 0)

        if (totalGifts <= maxGifts) {
            result.push(totalGifts)
        }

        for (let i = start; i < giftsCities.length; i++) {
            combination.push(giftsCities[i]);
            bag(i + 1, combination);
            combination.pop()
        }
    };
    
    bag (0, []);

    return result.length ? Math.max(...result) : 0; 
    
  }
  

  const giftsCities = [12, 3, 11, 5, 7]
  const maxGifts = 20
  const maxCities = 3

  console.log( getMaxGifts([50], 15, 1)) // 0
  console.log( getMaxGifts([50], 100, 1)) // 50
  console.log(getMaxGifts([50, 70], 100, 1)) // 70
  console.log( getMaxGifts([50, 70, 30], 100, 2))// 100
  console.log(getMaxGifts([50, 70, 30], 100, 3) )// 100
 console.log( getMaxGifts([50, 70, 30], 100, 4)) // 100