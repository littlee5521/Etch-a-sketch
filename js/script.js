let counter = 0;
let counter1 = 0;
let size = 0;
const canvas= document.querySelector(".canvas")
function createGrid(input,){
    counter=0;
    counter1=0;
    while (counter<input){
    const wip = document.createElement('div')
     wip.style.display='flex'
     wip.style.flex='1'
     wip.classList.add('row')
    counter1= 0;
     while (counter1<input){
       const pixels = document.createElement('div')
       pixels.style.flex ='auto'
       pixels.style.flexShrink = '0'
       pixels.classList.add('pixel')
       size = (960/input);
       pixels.style.width = size+'px'
       pixels.style.height = size+'px'
       wip.appendChild(pixels)
       counter1++
     }
     canvas.appendChild(wip)
     counter++;
     console.log('No i did run ')
    }
}
createGrid(7)
function addhover(){
  const pixelList = document.querySelectorAll('.pixel')
pixelList.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.toggle('black')
    });
  });
}
addhover()
const input1 = document.querySelector('.input')
const inputBtn = document.querySelector('.input-btn')
function updateCanvas() {
    const rowList = document.querySelectorAll('.row')
    rowList.forEach((element) => {
        canvas.removeChild(document.querySelector('.row'))
    })
    createGrid(input1.value)
    addhover()
}
 inputBtn.addEventListener('click',updateCanvas );