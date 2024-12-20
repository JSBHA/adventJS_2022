const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


function distributeGifts(packOfGifts, reindeers) {
    
    // Calcula el peso total de los regalos
    const weightGifts = packOfGifts.reduce((sum, gift) => sum + gift.length, 0)
    
    // Calcula la capacidad total de los renos
    const capacityReindeer = reindeers.reduce((sum, reindeer) => sum + reindeer.length * 2, 0);
    
     // Calcula el número máximo de cajas que pueden ser entregadas
    return Math.floor(capacityReindeer / weightGifts)
  }