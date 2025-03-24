
let userbt = document.querySelectorAll(".box");
let h = document.querySelector(".heading1");
let parau = document.querySelector(".parau")
let parac = document.querySelector(".parac")
let cout = 0;
let temp = 0;
let head = document.querySelector(".heading");
let comdisplay = document.querySelector(".computerdisplay")
let userdisplay = document.querySelector(".userdisplay");
let newgame = document.querySelector("#button");

const img = {
    Scissor: "https://amanchauhan112.github.io/Luffy.github.io/public/img/StonePaperScissor/sciccors_final.png",
    Paper: "https://amanchauhan112.github.io/Luffy.github.io/public/img/StonePaperScissor/paper_final.png",
    Stone: "https://amanchauhan112.github.io/Luffy.github.io/public/img/StonePaperScissor/stone_final.png"
}
const winpatern = [
    ["Paper", "Stone"],
    ["Scissor", "Paper"],
    ["Stone", "Scissor"]
];
const value = ["Paper", "Stone", "Scissor"];
const newbutton = () => {
    userdisplay.innerText = "";
    comdisplay.innerText = "";
    head.classList.add("hide");
    parau.innerText = "0";
    parac.innerText = "0";
    cout=0;
    temp=0;
}
userbt.forEach((i) => {
    i.addEventListener("click", () => {
        let ram = Math.floor(Math.random() * 3);
        userdisplay.innerHTML = "";
        comdisplay.innerHTML="";
        console.log(ram);
        const element = document.createElement('img');
        element.src = img[i.innerText];
        element.className = "img";
        userdisplay.appendChild(element);
        const compElement = document.createElement('img');

        compElement.src = img[value[ram]];
        compElement.className='img';
        comdisplay.appendChild(compElement);
        checkwinner(i.innerText,value[ram]);
    });
})
function checkwinner(e,v) {
    console.log("called");
    for (let pattern of winpatern) {
        p1 = pattern[0];
        p2 = pattern[1];
        if (p1 === e && p2 === v) {
            h.innerText = "Congratulation You Win";
            head.classList.remove("hide")
            cout++;
            parau.innerText = cout;
            break;
        }
        else if (p1 === v && p2 === e) {
            h.innerText = "Oop's You Lose";
            head.classList.remove("hide");
            temp++;
            parac.innerText = temp;
            break;

        }
        else if (e == v) {
            h.innerText = "Its a Drow"
            head.classList.remove("hide")
            break;
        }
    }
}
newgame.addEventListener("click", newbutton)

