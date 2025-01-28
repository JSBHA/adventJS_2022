function wrapping(gifts) {

  // Se crea el nuevo arr dodne esten empacos los regalos 
    return gifts.map(gift => {
      //Calcular la longitud del empaque 
      let stars = '*'.repeat(gift.length * 2 );
      //Se empaca el regalo utilizando el salto entre lianes /n 
      return  `${stars}\n*${gift}*\n${stars}`;
    })

  }


  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)

console.log(wrapped)