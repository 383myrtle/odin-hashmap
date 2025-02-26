import { HashMap } from "./HashMap.js";

const map = new HashMap();

console.log("/******** Setting hash map values ********/");
map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");

map.toString();

console.log("/******** Testing methods ********/");
console.log("/*** Get method ***/");
console.log(map.get("frog")); // "green"
console.log(map.get("grape")); // "purple"
console.log(map.get("ice cream")); // "white"
console.log(map.get("banana")); // "yellow"
console.log(map.get("lion")); // "golden"
console.log(map.get("racecar")); // null
console.log(map.get("john lennon")); // null


console.log("/*** Has method ***/");
console.log(`Has "jacket": ${map.has("jacket")}`); //true
console.log(`Has "dog": ${map.has("dog")}`); // true
console.log(`Has "kite": ${map.has("kite")}`); // true
console.log(`Has "armadillo": ${map.has("armadillo")}`); // false
console.log(`Has "rabbit": ${map.has("rabbit")}`); // false

console.log("/*** Length method ***/");
console.log("Length: " + map.length()); // 12


console.log("/*** Remove method ***/");
console.log(map.get("carrot")); // "orange"
console.log(map.remove("carrot")); // true
console.log(map.get("carrot")); // null
console.log("Length: " + map.length()); // 11

console.log("/*** Clear method ***/");
console.log("/* Clearing */")
map.clear();
console.log("Length: " + map.length()); // 0
console.log("/* Repopulating */")
map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");
console.log("Length: " + map.length()); // 12


console.log("/*** Keys method ***/");
console.log(map.keys()); // Array of all keys in map

console.log("/*** Values method ***/");
console.log(map.values()); // Array of all values in map

console.log("/*** Entries method ***/");
console.log(map.entries()); // 2D Array of all entries (key-value pairs) in map

console.log("/******** Testing overwriting ********/");
console.log("Length: " + map.length()); // 12
console.log(map.get("hat")); // black
map.set("hat", "cyan");
console.log("Length: " + map.length()); // 12
console.log(map.get("hat")); // cyan

console.log("/******** Testing growth ********/");
console.log("Length: " + map.length()); // 12
console.log("Capacity: "+ map.capacity); //16
console.log("Added entry (moon, silver)");
map.set("moon", "silver");
console.log("Length: " + map.length()); // 13
console.log("Capacity: "+ map.capacity); //32
map.toString();
