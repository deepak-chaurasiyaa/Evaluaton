let product = JSON.parse(localStorage.getItem("products"));
function show() {
  let prod = document.getElementById("prod");

  product.forEach(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = el.name;

    let price = document.createElement("p");
    price.innerHTML = el.price;

    let image = document.createElement("img");
    image.src = el.image;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    div.append(image, name, price, btn);
    prod.append(div);
  });
}

function HtoL() {
  product = JSON.parse(localStorage.getItem("products"));
  product.sort(function (a, b) {
    return b.price - a.price;
  });
  alert("Product Sorted In High To Low Order");
}
function LtoH() {
  product = JSON.parse(localStorage.getItem("products"));
  product.sort(function (a, b) {
    return a.price - b.price;
  });
  alert("Product Sorted In Low To High Order");
}
show();

function payment() {
  window.location.href = "payment.html";
}
