
let scooba= document.getElementById ("scooba1")
// let scooba2= document.getElementById ("scooba2")
let scooba3= document.getElementById ("scooba3")
let scooba4= document.getElementById ("scooba4")
let shark1= document.getElementById ("shark1")
let shark2= document.getElementById ("shark2")
let hedding= document.getElementById ("hedding")


window.addEventListener("scroll",()=>{
    let value = window.scrollY
    scooba.style.right =value*.4+"px"
    scooba2.style.right =value*.10+"px"
    scooba3.style.left =value*.20+"px"
      scooba4.style.bottom =value*.3+"px"
      shark1.style.left =value*.30+"px"
      shark2.style.right =value*.15+"px"
      hedding.style.transform = `translateY(${value * 0.9}px)`;
})




