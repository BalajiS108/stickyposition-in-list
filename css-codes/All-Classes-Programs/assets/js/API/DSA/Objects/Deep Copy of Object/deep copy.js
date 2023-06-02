// Create a Deep copy of the following

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

let jsonCopy = JSON.parse(JSON.stringify(json));
console.log(jsonCopy);

jsonCopy.isbn = "234-567-890";
jsonCopy.author.lastname = "Mohan";
jsonCopy.author.lastname = "Krishna";
console.log(json);
