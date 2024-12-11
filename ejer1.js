function wrapping(gifts) {
    
      return gifts.map(gift => {
      let stars = '*'.repeat(gift.length * 2 );
      return  `${stars}\n*${gift}*\n${stars}`;
    })

  }


  const gifts = ['cat', 'game', 'socks']
  const wrapped = wrapping(gifts)

console.log(wrapped)