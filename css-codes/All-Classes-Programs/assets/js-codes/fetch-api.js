const URL = "https://fakestoreapi.com/products";

const users = async (url) => {
  //async means multithreading
  const response = await fetch(url); //fetch data from url
  let data = await response.json(); //convert to json format
  // console.log(data[0]);
  // console.log(data[0].image);

  console.log(data["rating"]);

  let mainContainer = document.getElementById("main-container");
  for (let i = 0; i < data.length; i++) {
    //creating elements
    let productId = document.createElement("p");
    let productContainer = document.createElement("div");
    let productTitle = document.createElement("p");
    let productImage = document.createElement("img");
    let productPrice = document.createElement("p");
    let productDescription = document.createElement("p");
    let productCategory = document.createElement("p");
    let productRating = document.createElement("div");
    let productRatingStar = document.createElement("span");
    let productRatingRate = document.createElement("span");
    let productRatingCount = document.createElement("span");
    let addToCartButton = document.createElement("button");

    //create classes for different elements
    productTitle.className = "product-title";
    productImage.className = "img";
    productPrice.className = "product-price";
    productCategory.className = "product-cat";
    productContainer.className = "product-class";
    productRating.className = "Rating";
    productDescription.className = "description";
    productRatingRate.className = "Rating-Rate";
    productRatingCount.className = "Rating-count";
    productRatingStar.className = "material-symbols-outlined";
    addToCartButton.className = "button";

    //Adding details to the elements
    productId.textContent = data[i].id;
    productTitle.textContent = data[i].title;
    productPrice.textContent = "Price: " + data[i].price + "  / unit";
    productDescription.textContent = data[i].description;
    productCategory.textContent = data[i].category;
    productImage.src = data[i].image;
    productRatingRate.textContent = data[i].rating.rate;
    productRatingCount.textContent = "( " + data[i].rating.count + " )";
    productRatingStar.textContent = "star";
    addToCartButton.textContent = "Add TO Cart";

    //Appending the child with parent nodes

    productRating.appendChild(productRatingStar);
    productRating.appendChild(productRatingRate);
    productRating.appendChild(productRatingCount);

    productContainer.appendChild(productImage);
    productContainer.appendChild(productTitle);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productDescription);
    productContainer.appendChild(productCategory);
    productContainer.appendChild(productRating);
    productContainer.appendChild(addToCartButton);
    mainContainer.appendChild(productContainer);

    //Styling to the elements
    productImage.style.height = "150px";
    productImage.style.width = "150px";
    productImage.style.padding = "0px 120px";
    productTitle.style.fontSize = "20px";
    productTitle.style.fontWeight = "bold";
    // productImageText.style.fontWeight = "bold";
    productCategory.style.fontWeight = "bold";
    productRatingRate.style.fontWeight = "bold";
    productRatingCount.style.fontWeight = "bold";
    addToCartButton.style.backgroundColor = "green";

    addToCartButton.addEventListener("click", () => {
      console.log(productId.textContent, productTitle.textContent);
    });

    // addToCartButton.addEventListener();
  }
};

users(URL);
