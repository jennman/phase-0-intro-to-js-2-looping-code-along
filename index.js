// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//   }
//   const gifts = ["teddy bear", "drone", "doll"];

//   function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       debugger;
//     }
  
//     return gifts;
//   }
  
//   wrapGifts(gifts);

  const name = (['Guadalupe', 'Ollie','Aki']);

  function writeCards(name,event) {
    let message = [];
    for (let i = 0; i < name.length; i++){
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    debugger;
}
return message;

}
function countDown(){
    let down = 10;
    while (down > -1){
        console.log(down--);
    }
    
}
