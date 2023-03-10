const cats = ["Milo", "Otis", "Garfield"];

function reset() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat() {
  cats.push("Ralph");
}
reset();
cats; 

function destructivelyPrependCat() {
  cats.unshift("Bob");
}
reset();
cats;

function destructivelyRemoveLastCat() {
  cats.pop();
}
reset();
cats;

function destructivelyRemoveFirstCat() {
  cats.shift();
}
reset();
cats;

function appendCat(name) {
  return [...cats,name];
}
appendCat("Broom");

function prependCat(name) {
  return [name,...cats];
}
prependCat("Broom");

function removeLastCat() {
  return [...cats.slice(0,2)];
}
removeLastCat();

function removeFirstCat() {
  return [...cats.slice(-2)]
}
removeFirstCat();
