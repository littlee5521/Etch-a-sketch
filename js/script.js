let counter = 0;
let counter1 = 0;
let size = 0;
const canvas= document.querySelector(".canvas")
function createGrid(input,){
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
    }
}
createGrid(30)
const pixelList = document.querySelectorAll('.pixel')
pixelList.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.toggle('black')
    });
  });