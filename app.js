let productsCountEl = document.getElementById("products-count");
let btnAddToCart = document.querySelectorAll(".add-to-cart");

btnAddToCart.forEach(el => {
    el.addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
});


////////////////////////////////////////


let btnMoreDetails = document.querySelectorAll(".detais");
let modalWindow = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

btnMoreDetails.forEach(el => {
    el.addEventListener("click" , function() {
        modalWindow.classList.add("show");
        modalWindow.classList.remove("hide");
    })
})

function closeModal() {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
}

closeBtn.addEventListener("click", closeModal);

modalWindow.addEventListener("click", function(e) {
    if(e.target == modalWindow) {
        closeModal();
    } 
})


///////////////////////////////////////////////
//Like button//

let likeIcon = document.querySelectorAll(".heart-icon");


likeIcon.forEach(el => {
    el.addEventListener("click", function() {
        if(el.classList.contains("icon-active")) {
            el.classList.remove("icon-active")
        } else {
            el.classList.add("icon-active");
        }
    })
})