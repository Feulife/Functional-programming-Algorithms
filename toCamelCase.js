const toCamelizeString = (str) => {
  return str
    .split("-")
    .map((w, i) =>
      i ? ((w = w.split("")), w.shift().toUpperCase() + w.join("")) : w
    )
    .join("");
};
console.log(toCamelizeString("my-example-string"));

const toCamelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
};
console.log(toCamelize("my-example-string"));
