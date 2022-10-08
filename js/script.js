const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelector(".img1");
console.log(imgsEl.length);

let currentImg = 1;
let timeOut;

nextEl.addEventListener("click", ()=> 
{
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})

prevEl.addEventListener("click", ()=> 
{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})

updateImg();

function updateImg(){
    if(currentImg>5){
        currentImg = 1;
    }else if(currentImg<1){
        currentImg = 5;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg-1) * 1414.5}px)`;
    timeOut = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000);

}