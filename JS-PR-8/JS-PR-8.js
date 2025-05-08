// ADD TO CART VIWE PROJECT 8 ==> 

    let editIndex = null;

function addOrUpdateProduct() {
  let name = document.getElementById("name").value.trim();
  let price = document.getElementById("price").value.trim();
  let quantity = document.getElementById("quantity").value.trim();
  let category = document.getElementById("category").value.trim();

  if (!name || !price || !quantity || !category) {
    alert("Please fill all fields");
    return;
  }

  let product = {
    name: name,
    price: parseFloat(price),
    quantity: parseInt(quantity),
    category: category,
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];

  if (editIndex !== null) {
    products[editIndex] = product;
    editIndex = null;
  } else {
    products.push(product);
  }

  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("category").value = "";

  displayProducts();
}

function displayProducts() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let table = document.getElementById("productTable");
  table.innerHTML = "";

  products.forEach((p, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.name}</td>
      <td>₹${p.price}</td>
      <td>${p.quantity}</td>
      <td>₹${p.price * p.quantity}</td>
      <td>${p.category}</td>
      <td>
        <button onclick="deleteProduct(${index})" id="addToCart">Delete</button>
        <button onclick="addToCart(${index})" id="addToCart">Add to Cart</button>
      </td>
    `;
    table.appendChild(row);
  });
}

function editProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let product = products[index];

  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("quantity").value = product.quantity;
  document.getElementById("category").value = product.category;

  editIndex = index;
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function addToCart(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let product = products[index];

  let cartTable = document.getElementById("cartTable");
  let cartBadge = document.getElementById("cartBadge");

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${product.name}</td>
    <td>${product.quantity}</td>
    <td>₹${product.price * product.quantity}</td>
    <td>
    <button onclick="editProduct(${index})" id="addToCart">Edit</button>
      <button onclick="deleteFromCart(this)" id="remove">Remove</button>
    </td>
  `;
  cartTable.appendChild(row);

  let cartCount = parseInt(cartBadge.innerText);
  cartBadge.innerText = cartCount + 1;

  updateCartTotal();
}

function deleteFromCart(btn) {
  let row = btn.closest("tr");
  row.remove();

  let cartBadge = document.getElementById("cartBadge");
  let cartCount = parseInt(cartBadge.innerText);
  cartBadge.innerText = cartCount > 0 ? cartCount - 1 : 0;

  updateCartTotal();
}

function toggleCart() {
  let cartPanel = document.getElementById("cartPanel");
  cartPanel.classList.toggle("open");
}

function updateCartTotal() {
  let rows = document.querySelectorAll("#cartTable tr");
  let total = 0;

  rows.forEach((row) => {
    let priceCell = row.children[2];
    let value = parseFloat(priceCell.textContent.replace("₹", "")) || 0;
    total += value;
  });

  document.getElementById("totalValue").innerText = `total : ${total}`;
}

function editCartItem(btn) {
  alert("Edit in cart not implemented. This is a placeholder.");
}

displayProducts();