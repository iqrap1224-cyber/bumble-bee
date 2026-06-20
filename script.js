const chapterTitle = document.getElementById("chapterTitle");
const message = document.getElementById("message");
const button = document.getElementById("nextBtn");
const passwordBox = document.getElementById("passwordBox");

// ⭐ Create Stars
for (let i = 0; i < 180; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.getElementById("stars").appendChild(star);
}

// ❤️ Chapters
const chapters = [

{
title:"Welcome Home",
text:`Hi Bumble Bee ❤️

I made this little place for you.

Whenever life feels heavy...

come home.`
},

{
title:"Borrow My Eyes",
text:`You spend so much time looking for your flaws.

I wish you could borrow my eyes.

Just for one minute.

You'd finally understand

why you're so deeply loved.`
},

{
title:"The Evidence",
text:`You remember your mistakes.

I remember your kindness.

You remember your failures.

I remember every time

you stayed strong

even when nobody noticed.`
},

{
title:"The Court of Self-Blame",
text:`Every accusation

your mind makes

against you...

dismissed.

Being tired

doesn't make you weak.

Being lost

doesn't make you a failure.`
},

{
title:"Things Nobody Thanks You For",
text:`Thank you

for trying.

For staying.

For caring.

For existing.

I'll always notice.`
},

{
title:"Backpack Check",
text:`Imagine putting down

every invisible burden

you've been carrying.

Leave it here.

I'll sit with you.`
},

{
title:"Future Fragments",
text:`One day

this will all

just be a memory.

We'll laugh again.

I promise.`
},

{
title:"Emergency Hug",
text:`Close your eyes.

Imagine I'm hugging you.

Stay here

for as long as you need.`
},

{
title:"Borrow My Faith",
text:`Until you believe

in yourself again...

borrow my belief.

I have enough

for both of us.`
},

{
title:"The Final Door",
text:`Only someone

who truly knows us

can unlock

what comes next...`
}

];

let current = 0;

button.addEventListener("click", function(){

    // Last chapter
    if(current === chapters.length - 1){

        chapterTitle.innerHTML = "Secret Ending 🔒";
        message.innerHTML = "Enter the secret password below.";

        passwordBox.classList.add("show");

        button.innerHTML = "Unlock";

        button.onclick = function(){

            if(passwordBox.value.toLowerCase() === "bumblebee"){

                chapterTitle.innerHTML = "❤️";

                message.innerHTML = `
                <h2>You found it.</h2>
                <br>
                <p>
                I hope one day
                you see yourself
                the way I see you.
                <br><br>
                Whenever life gets heavy...
                <br><br>
                Come Home.
                </p>
                `;

                button.style.display = "none";
                passwordBox.style.display = "none";

            }else{

                alert("Wrong password ❤️");

            }

        };

        return;

    }

    current++;

    chapterTitle.innerHTML = chapters[current].title;
    message.innerText = chapters[current].text;

});