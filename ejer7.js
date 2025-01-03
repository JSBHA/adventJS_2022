function getGiftsToRefill(a1, a2, a3) {
    const result = []; // Aquí guardamos los regalos a reponer
    const seen = new Set(); // Aquí guardamos los regalos que ya hemos revisado

     // Convertimos cada almacén en un conjunto para eliminar duplicados
     const uniqueA1 = new Set(a1);
     const uniqueA2 = new Set(a2);
     const uniqueA3 = new Set(a3);

     // Unimos los tres almacenes en un solo array para iterar sobre todos los regalos
    const allGifts = [...uniqueA1, ...uniqueA2, ...uniqueA3];



    // Usamos forEach para recorrer todos los regalos
    allGifts.forEach(gift => {
       if (!seen.has(gift)){  // Solo procesamos regalos no vistos aún
            seen.add(gift) // Marcar el regalo como visto

            // Contamos cuántos almacenes tienen este regalo
            const count = 
            (uniqueA1.has(gift) ? 1 : 0) + 
            (uniqueA2.has(gift) ? 1 : 0) + 
            (uniqueA3.has(gift) ? 1 : 0);

            // Si el regalo está en solo un almacén, lo agregamos a result
            if (count === 1 ){
                result.push(gift);
            }
        }

    });

    return result;
    
  }

  function getGiftsToRefill(a1, a2, a3) {
    // Creamos un conjunto con todos los regalos únicos de los tres almacenes
    const allGifts = new Set([...a1, ...a2, ...a3]);
  
    // Filtramos los regalos que solo están presentes en uno de los almacenes
    return [...allGifts].filter(gift => {
      const count = (a1.includes(gift) ? 1 : 0) +
                    (a2.includes(gift) ? 1 : 0) +
                    (a3.includes(gift) ? 1 : 0);
      return count === 1; // Solo debe estar en uno de los almacenes
    });
  }


  const a1 = ['bici', 'coche', 'bici', 'bici']
  const a2 = ['coche', 'bici', 'muñeca', 'coche']
  const a3 = ['bici', 'pc', 'pc']
  
  console.log( gifts = getGiftsToRefill(a1, a2, a3))