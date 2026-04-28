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
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartBtn = document.getElementById("cart-btn");

let total = 0;
let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
const plant = button.closest(".plants");
const name = plant.querySelector("h3").textContent;
const price = parseFloat(plant.dataset.price);
const li = document.createElement("li");
li.textContent = `${name} - $${price.toFixed(2)}`;
cartItems.appendChild(li);

total += price;
totalPriceEl.textContent = total.toFixed(2);

// cart count
count++;
cartBtn.textContent = `Cart (${count})`;
    });
});