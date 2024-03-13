const containerE1=document.querySelector(".container");

const careers=["Youtuber","Web Developer","FreeLancer","Instructor"];

let careerIndex=0;

let charcterIndex=0;

updateText();

function updateText(){
    charcterIndex++
    containerE1.innerHTML=` <h1>I am ${careers[careerIndex].slice(0,1)===
    "I"? "an" :"a"} ${careers[careerIndex].slice(0,charcterIndex)}</h1>`;
   
    if(charcterIndex === careers[careerIndex].length){
        careerIndex++
        charcterIndex =0
    }
    if(careerIndex===careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400);
}


