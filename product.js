function showproduct(event) {
  event.preventDefault();

  let form = document.getElementById("form");

  let name = form.name.value;

  let price = form.price.value;

  let image = form.image.value;

  let product = {
    name,
    price,
    image,
  };

  let arr;
  arr = localStorage.getItem("products");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("products"));
  }
  arr.push(product);

  localStorage.setItem("products", JSON.stringify(arr));
}
