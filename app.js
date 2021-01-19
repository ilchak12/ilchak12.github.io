//Products count//

let productsCountEl = document.getElementById("products-count");
let btnAddToCart = document.querySelectorAll(".add-to-cart");

btnAddToCart.forEach(el => {
    el.addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
});


////////////////////////////////////////
//Modal window//

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
        el.classList.toggle("icon-active");
    })
})

///////////////////////////////////////////////
//change product count

let dekBtn = document.querySelectorAll(".dek-btn");
let inkBtn = document.querySelectorAll(".ink-btn");
let countValue = document.querySelectorAll(".product-quantity input");

let minCount = 1;
let maxCount = 5;

function toggleBtn(count, i) {
    dekBtn[i].disabled = count <= minCount;
    inkBtn[i].disabled = count >= maxCount;
}

for(let i = 0; i < countValue.length; i++) {
    let currentCount = +countValue[i].value;
    toggleBtn(currentCount, i);
}

for(let i = 0; i < dekBtn.length; i++) {
    dekBtn[i].addEventListener('click', function() {
        let currentCount = +countValue[i].value;
        let newCount = currentCount - 1;
        countValue[i].value = newCount;

        toggleBtn(newCount, i);
    })
}

for(let i = 0; i < inkBtn.length; i++) {
    inkBtn[i].addEventListener('click', function() {
        let currentCount = +countValue[i].value;
        let newCount = currentCount + 1;
        countValue[i].value = newCount;

        toggleBtn(newCount, i);
    })
}

////

// function Car(model, color, year) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
// }

// function Calculator(a, b) {
//     this.a = a;
//     this.b = b;
    
//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calc = new Calculator(5, 15);
// console.log(calc.sum());

// const audi = new Car("A4", "Black", 2015);
// const bmw = new Car("328", "Gray", 2010);
// console.log(audi);
// console.log(bmw);


