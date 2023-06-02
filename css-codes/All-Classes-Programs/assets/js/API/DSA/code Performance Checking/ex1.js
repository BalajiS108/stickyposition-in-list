const t0 = performance.now();
const doSomething = () => {
  console.log("Hare Krishna");
  console.log("Hari Bol");
  return 20 + 30;
};
console.log(doSomething());
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
