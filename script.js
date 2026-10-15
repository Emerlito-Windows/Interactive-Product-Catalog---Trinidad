const products = [
  { id: 1, name: "Wireless Mouse", category: "gadgets", price: 599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7ARgVFfAazRqXYf1XeFzYZEgJw3GVfoAzsbrd1T5pJrq8oqx742iHuc&s=10" },
  { id: 2, name: "Keyboard", category: "gadgets", price: 1499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B8YCGrE3bApcAQdVI6xoyVw6Ma9VFrI0JjZVvE9XTQ&s" },
  { id: 3, name: "Treasure Island", category: "books", price: 450, image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/8a94453b-8154-4cbe-a101-314843d31866.__CR0,0,2910,1800_PT0_SX970_V1___.jpg" },
  { id: 4, name: "White Fang", category: "books", price: 550, image: "https://images.ctfassets.net/qpn1gztbusu2/C8Athp39gdako2BPUINN8/9062fc5ec26a792b999dbc3e7b67deeb/jack-london-white-fang.webp" },
  { id: 5, name: "Ferrari Racing Jacket", category: "clothing", price: 350, image: "https://www.finishlinefever.com/cdn/shop/files/7_f693f38a-d18d-4e7a-b459-672663841aa9.png?v=1777415535&width=2048" },
  { id: 6, name: "Hoodie", category: "clothing", price: 1200, image: "https://natgeostore.ph/cdn/shop/files/IMG_5388_4b0bfe50-2f66-4d6a-a2b9-a1ed60c330a3.jpg?v=1763609406&width=3840" }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filters button");

function displayProducts(items) {
  productGrid.innerHTML = "";
  items.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML =
      "<img src='" + product.image + "' alt='" + product.name + "' " +
      "onerror=\"this.src='https://via.placeholder.com/300x200?text=No+Image'\">" +
      "<h3>" + product.name + "</h3>" +
      "<p class='category'>" + product.category + "</p>" +
      "<p class='price'>₱" + product.price.toLocaleString() + "</p>";
    productGrid.appendChild(card);
  });
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(function (p) {
      return p.category === category;
    }));
  }
}

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterProducts(btn.dataset.category);
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Error: Name must be at least 3 characters.");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Error: Email must contain '@' and '.'.");
    return;
  }
  if (message.length < 10) {
    alert("Error: Message must be at least 10 characters.");
    return;
  }

  alert("Success: Your message has been sent!");
  this.reset();
});

displayProducts(products);