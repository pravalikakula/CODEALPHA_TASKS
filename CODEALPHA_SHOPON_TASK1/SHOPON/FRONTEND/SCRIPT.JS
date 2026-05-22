let count = 0;

let cartItems = [];

function addToCart(product){

    count++;

    document.getElementById("cart-count").innerHTML = count;

    cartItems.push(product);

    displayCart();

    alert(product + " Added To Cart");
}

function displayCart(){

    let items = "";

    cartItems.forEach(function(item){

        items += "<li>✔ " + item + "</li>";

    });

    document.getElementById("cart-items").innerHTML = items;
}

function toggleCart(){

    document
    .getElementById("cart-sidebar")
    .classList.toggle("active");
}