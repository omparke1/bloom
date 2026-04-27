"use strict";

// color-changing-mode
const toggle = document.getElementById("color-mode");

console.log(toggle);

toggle.addEventListener("click", (e) => { 
    e.preventDefault(); 
    document.body.classList.toggle("dark-mode");
});


// shop section pricing

const buttons = document.querySelectorAll(".plants button");
const cartBtn = document.getElementById("cart-btn");

let total = 0;
let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
const li = document.createElement("li");
li.textContent = `${name} - $${price}`;
cartItems.appendChild(li);

total += price;
totalPriceEl.textContent = total.toFixed(2);

// cart count
count++;
cartBtn.textContent = `Cart (${count})`;
    });
});