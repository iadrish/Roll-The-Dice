
const firstRandomNum=Math.floor(Math.random() *6)+1
const firstDiceImage='images/dice'+ firstRandomNum + '.png'; 

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);


const secondRandomNum=Math.floor(Math.random() *6)+1
const secondDiceImage='images/dice'+ secondRandomNum + '.png'; 

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

if(firstRandomNum>secondRandomNum)
 {
    document.querySelector('h1').innerHTML='Player 1 is winner';
 }
 else if(firstRandomNum<secondRandomNum)
 {
    document.querySelector('h1').innerHTML='Player 2 is winner';
 }
 else 
 {
    document.querySelector('h1').innerHTML='Match is a Draw';
 }