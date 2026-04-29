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
const img = plant.querySelector("img");

const li = document.createElement("li");

const imgClone = img.cloneNode(true);
imgClone.style.width = "50px";

const text = document.createElement("span");
text.textContent = `${name} - $${price.toFixed(2)}`;

li.appendChild(imgClone);
li.appendChild(text);
cartItems.appendChild(li);

total += price;
totalPriceEl.textContent = total.toFixed(2);

// cart count
count++;
cartBtn.textContent = `Cart (${count})`;

// tax count

const taxPriceEl = document.getElementById("tax-price");
const taxRate = 0.08;

const tax = total * taxRate;
taxPriceEl.textContent = tax.toFixed(2);

// final count
const finalPriceEl = document.getElementById("final-price");
const finalTotal = total + tax;
finalPriceEl.textContent = finalTotal.toFixed(2);
    });
});

// checkout reset

checkoutBtn.addEventListener("click", () => {

    if (count === 0){
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    const tax = total * taxRate;
    const finalTotal = total + tax;

    alert(`Thank you for your order!\nTotal: $${finalTotal.toFixed(2)}`);

    cartItems.innerHTML = "";

    total = 0;
    total = 0;

    totalPriceEl.textContent = "0.00";
    taxPriceEl.textContent = "0.00";
    finalPriceEl.textContent = "0.00";
    cartBtn.textContent = "Cart (0)";
});