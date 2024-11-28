

const words=["Web Developer","Sophomore","Developer"];
const wordSpan=document.querySelector(".multiple-text");
let index=0;
function cycleWords(){
    wordSpan.textContent =words[index];
    index=(index+1)%words.length;
    setTimeout(()=>{
        wordSpan.textContent="";
    },1000);
    }
    setInterval(cycleWords,2000);

const hamburger=document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar a");

function toggleMenu(){
    navMenu.classList.toggle('active');
}
hamburger.addEventListener("click",toggleMenu)