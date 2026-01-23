//selection side navbar, menuicon

const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

const closenav = document.getElementById("classnav");
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

//product search functionality

const productContainer = document.getElementById("product-container");
const search = document.getElementById("search");
const productlist = productContainer.querySelectorAll("div");

const notFound = document.createElement("p");
notFound.textContent = "No products found";
notFound.style.display = "none";
productContainer.append(notFound);

search.addEventListener("keyup", function (event) {
  let enteredvalue = event.target.value.toUpperCase();

  for (let count = 0; count < productlist.length; count = count + 1) {
    const productnameElement = productlist[count].querySelector("h1");

    if (productnameElement === null) {
      continue;
    }
    
    const productname = productnameElement.textContent;
    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      notFound.style.display = "block";
      productlist[count].style.display = "none";
    } else {
      notFound.style.display = "";
      productlist[count].style.display = "block";
    }
  }
});