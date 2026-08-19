// Get all the buttons
let plus = document.querySelectorAll(".fa-plus-circle");
let minus = document.querySelectorAll(".fa-minus-circle");
let trash = document.querySelectorAll(".fa-trash-alt");
let hearts = document.querySelectorAll(".fa-heart");


// Get the total price
let total = document.querySelector(".total");


// PLUS BUTTON
for (let i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", function () {

        let quantity = plus[i].parentElement.querySelector(".quantity");

        quantity.textContent = Number(quantity.textContent) + 1;

        updateTotal();
    });
}


// MINUS BUTTON
for (let i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function () {

        let quantity = minus[i].parentElement.querySelector(".quantity");

        if (Number(quantity.textContent) > 0) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }

        updateTotal();
    });
}


// DELETE BUTTON
for (let i = 0; i < trash.length; i++) {

    trash[i].addEventListener("click", function () {

        let product = trash[i].closest(".card-body").parentElement;

        product.remove();

        updateTotal();
    });
}


// HEART BUTTON
for (let i = 0; i < hearts.length; i++) {

    hearts[i].addEventListener("click", function () {

        if (hearts[i].style.color === "red") {
            hearts[i].style.color = "black";
        } else {
            hearts[i].style.color = "red";
        }

    });
}


// UPDATE TOTAL PRICE
function updateTotal() {

    let products = document.querySelectorAll(".card");

    let sum = 0;

    for (let i = 0; i < products.length; i++) {

        let price = Number(
            products[i]
                .querySelector(".unit-price")
                .textContent
                .replace("FCFA", "")
                .trim()
        );

        let quantity = Number(
            products[i].querySelector(".quantity").textContent
        );

        sum = sum + price * quantity;
    }

    total.textContent = sum + " FCFA";
}


// Calculate total when the page loads
updateTotal();
