const users = [
  {
    id: 1,
    name: "Aman",
    city: "Pune",
  },
  {
    id: 2,
    name: "Rahul",
    city: "Delhi",
  },
  {
    id: 3,
    name: "Abhinav",
    city: "Dehradun",
  },
];

const orders = [
  {
    orderId: 101,
    userId: 1,
    productName: "iPhone 12 Pro",
  },
  {
    orderId: 102,
    userId: 1,
    productName: "iPhone 13 Pro",
  },
  {
    orderId: 103,
    userId: 1,
    productName: "iPhone 14 Pro",
  },
  {
    orderId: 104,
    userId: 2,
    productName: "Samsung S23",
  },
];

//   const result = [
//     {
//       userId: 1,
//       name: "Aman",
//       orders: [
//         {
//           orderId: 101,
//           productName: "iPhone 12 Pro",
//         },
//         {
//           orderId: 102,
//           productName: "iPhone 13 Pro",
//         },
//         {
//           orderId: 103,
//           productName: "iPhone 14 Pro",
//         },
//       ],
//     },
//     {
//       userId: 2,
//       name: "Rahul",
//       orders: [
//         {
//           orderId: 104,
//           productName: "Samsung S23",
//         },
//       ],
//     },
//     {
//       userId: 3,
//       name: "Abhinav",
//       orders: [],
//     },
//   ];

// Write a program to form a result array using map & filter or anyting but map is a must
// Use above users & orders array

const userOrders = users.map((user) => {
  const orders1 = orders.filter((order) => user.id === order.userId);
  let obj = {};
  obj.userId = user.id;
  obj.name = user.name;
  obj.orders = orders1;
  console.log(orders1);
  return obj;
});
console.log(userOrders);
