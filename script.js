const imageContainer = document.querySelector(".imageContainer")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let x = 0

prev.addEventListener("click" , function(){
    x = x + 45
    scrollGallery()
})

next.addEventListener("click", function() {
    x = x - 45
    scrollGallery()
})

function scrollGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}

setInterval(() => {
    x = x - 45
    scrollGallery()
},3000)