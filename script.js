```javascript
const chapterTitle = document.getElementById("chapterTitle");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const hugBtn = document.getElementById("hugBtn");
const hugScreen = document.getElementById("hugScreen");
const closeHug = document.getElementById("closeHug");
const stars = document.getElementById("stars");

// ⭐ Create Stars
for(let i=0;i<200;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    star.style.animationDelay=Math.random()*3+"s";
    stars.appendChild(star);
}

const story=[

{
title:"Hi, Bumble Bee 🐝",
text:"I've been waiting for you.\n\nBefore we begin...\nCan I borrow your heart for just a few minutes?"
},

{
title:"Promise Me 🤍",
text:"For the next ten minutes...\n\nDon't argue with yourself.\n\nJust let me love you."
},

{
title:"One More Promise 🌙",
text:"Whenever you read these words...\nPretend you're seeing yourself through my eyes."
},

{
title:"Last Promise ❤️",
text:"If you smile today...\nDon't hide it.\n\nI love that smile."
},

{
title:"Welcome Home",
text:"Good.\n\nNow...\nWelcome Home.\n\nThis little world exists only for you."
}

];

let page=0;

nextBtn.onclick=function(){

    page++;

    if(page<story.length){

        chapterTitle.innerText=story[page].title;
        message.innerText=story[page].text;

        if(page===story.length-1){
            nextBtn.innerText="Begin Our Story ❤️";
        }

    }else{

        chapterTitle.innerText="Coming Next...";
        message.innerText="Love Jar 🌸\n\nWorry Clouds ☁️\n\nCompliment Machine ❤️\n\nMemory Book 📖\n\nThese will be our next update.";
        nextBtn.style.display="none";

    }

};

hugBtn.onclick=function(){
    hugScreen.style.display="flex";
};

closeHug.onclick=function(){
    hugScreen.style.display="none";
};
```
