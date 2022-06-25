const camelizeFirst = (str) => {
  return str
    .split(" ")
    .map((w) => ((w = w.split("")), w.shift().toUpperCase() + w.join("")))
    .join(" ");
};

console.log(
  camelizeFirst("Wszystkim, dzien dobry! Witam serdecznie i zycie smacznego!")
);
