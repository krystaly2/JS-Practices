const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

/*** change background color randomly when clicking the button***/
const colors = ['red', 'yellow', 'green', 'blue'];

colorBtn.addEventListener('click', changeColor);

let prevBcgCol;
 // initialize to a bcg value so that it's different from prevBcgCol
let curBcgCol = 'red';
function changeColor(){
  while(prevBcgCol === curBcgCol){
      const randInd = Math.floor(Math.random()*colors.length);
      curBcgCol = colors[randInd];
  }
  bodyBcg.style.backgroundColor = curBcgCol;
  prevBcgCol = curBcgCol;
}
