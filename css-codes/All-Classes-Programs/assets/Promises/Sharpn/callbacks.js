const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    posts.forEach((post) => {
      output = output + `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}
// getPosts();
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
createPost({ title: "post three", body: "This is post three" }, getPosts);
