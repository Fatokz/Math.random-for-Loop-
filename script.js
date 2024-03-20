let out = document.getElementById("out");
for (let index = 1; index <= 16; index++) {
    let randomNum = Math.floor(Math.random()*10)
    out.innerHTML += randomNum;
    console.log(out.innerHTML);
}
console.log(out.innerHTML);