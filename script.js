"use strict";

// color-changing-mode
const toggle = document.getElementById("color-mode");

console.log(toggle);

toggle.addEventListener("click", (e) => { 
    e.preventDefault(); 
    document.body.classList.toggle("dark-mode");
});

// form errors

//calling elements
const form = document.querySelector("form");

const nameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("pNum");
const emailInput = document.getElementById("emailAd");
const commentInput = document.getElementById("comment");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const commentError = document.getElementById("comment-error");
const messageEl = document.getElementById("form-message");

//regex for phone/email checking
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;


//when form is submitted check for these elements
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

//form input reset
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    commentError.textContent = "";
    messageEl.textContent = "";

//if these elements aren't seen show these errors
if (nameInput.value.trim() === ""){
    nameError.textContent = "Please enter your full name.";
    isValid = false;
}

if (!phoneRegex.test(phoneInput.value.trim())){
    phoneError.textContent = "Please enter a valid 10 digit number";
    isValid = false;
}

if (!emailRegex.test(emailInput.value.trim())){
    emailError.textContent = "Please enter a valid email";
    isValid = false;
}

if (commentInput.value.trim() === ""){
    commentError.textContent = "Please enter a comment.";
    isValid = false;
}

const selectedContact = document.querySelector('input[name="radioB"]:checked');
if (!selectedContact){
   alert("Please select a preferred contact method.");
    isValid = false;
}else{
    if (selectedContact.value === "Phone") {
        if (!phoneRegex.test(phoneInput.value.trim())){
            phoneError.textContent = "Enter a valid 10 digit phone number.";
            isValid = false;
        }
    }

    if (selectedContact.value === "Email") {
        if (!emailRegex.test(emailInput.value.trim())){
          emailError.textContent = "Enter a valid email address."; 
          isValid = false;
        }
    }
}

//if all elements are valid
if (isValid){
const customer = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    email: emailInput.value.trim(),
    comment: commentInput.value.trim(),
    preferredContact: selectedContact.value
};

//valid form output
messageEl.textContent = `Thank you, ${customer.name}! We will contact you via ${customer.preferredContact}. Your comment: "${customer.comment}"`;

//reset form
form.reset();
}
});


// shop section pricing

//calling elements
const buttons = document.querySelectorAll(".plants button");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartBtn = document.getElementById("cart-btn");

//total reset
let total = 0;
let count = 0;

//when item is added to cart
buttons.forEach(button => {
    button.addEventListener("click", () =>{

//calling additional elements
const plant = button.closest(".plants");
const name = plant.querySelector("h3").textContent;
const price = parseFloat(plant.dataset.price);
const img = plant.querySelector("img");

const li = document.createElement("li");
const imgClone = img.cloneNode(true);
imgClone.style.width = "50px";

const text = document.createElement("span");

//add item name/price to cart
text.textContent = `${name} - $${price.toFixed(2)}`;

//add image of item to cart
li.appendChild(imgClone);
li.appendChild(text);
cartItems.appendChild(li);

//add price totals
total += price;
totalPriceEl.textContent = total.toFixed(2);

//cart count output (total items in cart)
count++;
cartBtn.textContent = `Cart (${count})`;

//calling additional elements for tax count
const taxPriceEl = document.getElementById("tax-price");
const taxRate = 0.08;

// tax count calculating
const tax = total * taxRate;
taxPriceEl.textContent = tax.toFixed(2);

// final count
const finalPriceEl = document.getElementById("final-price");
const finalTotal = total + tax;
finalPriceEl.textContent = finalTotal.toFixed(2);
    });
});

// checkout reset
const checkoutBtn = document.querySelector(".checkout-btn");
const taxRate = 0.08;
const taxPriceEl = document.getElementById("tax-price");
const finalPriceEl = document.getElementById("final-price");

//cart button when clicked
checkoutBtn.addEventListener("click", () => {

    //if cart is empty when clicked
    if (count === 0){
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    //if cart is full when clicked, calculate overall total and output text showing order submission
    const tax = total * taxRate;
    const finalTotal = total + tax;

    alert(`Thank you for your order!\nTotal: $${finalTotal.toFixed(2)}`);

    //cart resets
   document.querySelectorAll("#cart-items li").forEach(item => item.remove());

    total = 0;
    count = 0;

    totalPriceEl.textContent = "0.00";
    taxPriceEl.textContent = "0.00";
    finalPriceEl.textContent = "0.00";
    cartBtn.textContent = "Cart (0)";
});