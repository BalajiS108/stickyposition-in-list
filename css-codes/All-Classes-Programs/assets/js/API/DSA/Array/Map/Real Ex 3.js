//Filtering products those which are out of stock & then transform remaining
//product into a new object array having product name & price.

const products = [
  { name: "Product 1", price: 10, inStock: true },
  { name: "Product 2", price: 20, inStock: false },
  { name: "Product 3", price: 30, inStock: true },
  { name: "Product 4", price: 40, inStock: false },
  { name: "Product 5", price: 50, inStock: true },
  { name: "Product 6", price: 60, inStock: false },
];
let totalPrice = 0;
let filteringInStockProducts = products
  .filter((inStockProducts) => inStockProducts.inStock === true) //
  .map((product) => {
    totalPrice = totalPrice + product.price;
    console.log({ totalPrice });
    return totalPrice;
  });

console.log("Total Instock Products=", filteringInStockProducts.length);
console.log(
  "Total Price of Instock Products=",
  filteringInStockProducts[filteringInStockProducts.length - 1]
);
