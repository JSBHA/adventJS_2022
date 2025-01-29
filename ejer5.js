function getMaxGifts(giftsCities, maxGifts, maxCities) {

    // Esta lista almacenará los resultados válidos (el total de regalos por combinación)
    const result = [];
    
    // Función recursiva que genera las combinaciones posibles de regalos
    const bag = (start, combination) => {
        // Si la combinación excede el número máximo de ciudades, se detiene la ejecución
        if (combination.length > maxCities) return;

        // Calculamos el total de regalos en la combinación actual
        const totalGifts = combination.reduce((a, b) => a + b, 0)

        // Si el total de regalos es menor o igual al máximo permitido, agregamos al resultado
        if (totalGifts <= maxGifts) {
            result.push(totalGifts)
        }

        for (let i = start; i < giftsCities.length; i++) {
            combination.push(giftsCities[i]);// Agregamos el regalo de la ciudad actual
            bag(i + 1, combination);// Llamada recursiva para seguir agregando ciudades
            combination.pop()// Retiramos el último regalo para probar la siguiente ciudad
        }
    };
    // Iniciamos la función recursiva con la ciudad 0 y una combinación vacía
    bag (0, []);

    // Si tenemos resultados, devolvemos el máximo de ellos; de lo contrario, retornamos 0
    return result.length ? Math.max(...result) : 0; 
    
  }
  
  const giftsCities = [12, 3, 11, 5, 7]
  const maxGifts = 20
  const maxCities = 3

  console.log( getMaxGifts([50], 15, 1)) // 0
  console.log( getMaxGifts([50], 100, 1)) // 50
  console.log( getMaxGifts([50, 70], 100, 1)) // 70
  console.log( getMaxGifts([50, 70, 30], 100, 2))// 100
  console.log( getMaxGifts([50, 70, 30], 100, 3) )// 100
  console.log( getMaxGifts([50, 70, 30], 100, 4)) // 100