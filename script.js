
const body = document.querySelector("body");
const counter = document.querySelector(".counter");
let count = 1;
setInterval(() => {
    if (count < 596) {
        count++;
        counter.innerHTML = count + "k";
    }
}, 1);


function toggel() {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "red";
    }
}
