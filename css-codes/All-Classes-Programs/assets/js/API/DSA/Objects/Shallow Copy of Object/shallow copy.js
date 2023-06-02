const json = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

let jsonCopy = Object.assign({}, json);

jsonCopy.isbn = "234-567-890";
jsonCopy.author.lastname = "krishna";

console.log(json);
