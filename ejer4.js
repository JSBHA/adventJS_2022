function fitsInOneBox(boxes) {  
    
     // Ordenar las cajas por volumen (l * w * h)
     boxes.sort((a, b) => (a.l * a.w * a.h) - (b.l * b.w * b.h));

     // Comprobar si cada caja puede caber en la siguiente
     for (let i = 1; i < boxes.length; i++){
       const box = boxes[i - 1];
       const box1 = boxes[i];

        // Verificar si la caja 1 cabe en la caja 2
        if (!(box.l < box1.l && box.w < box1.w && box.h < box1.h)){
         return false  // Si no cabe, devolvemos false
       }
     };         
   
     return true
  
  }

  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]


const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]