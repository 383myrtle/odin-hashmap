# odin-hashmap
HashMap project from the Odin Project course

## Description
This project implements a HashMap data structure in JavaScript. The HashMap uses an array of linked lists to handle collisions and supports basic operations such as setting, getting, checking for existence, removing, and clearing key-value pairs. It also provides methods to retrieve all keys, values, and entries.

## Features
- **Set**: Add or update a key-value pair.
- **Get**: Retrieve the value associated with a key.
- **Has**: Check if a key exists in the map.
- **Remove**: Remove a key-value pair by key.
- **Clear**: Remove all key-value pairs.
- **Keys**: Get an array of all keys.
- **Values**: Get an array of all values.
- **Entries**: Get an array of all key-value pairs.
- **Automatic resizing**: The HashMap automatically resizes when the load factor exceeds 0.75.

## Usage
To use this HashMap implementation, import the `HashMap` class and create an instance of it:

```javascript
import { HashMap } from "./HashMap.js";

const map = new HashMap();

map.set("apple", "red");
console.log(map.get("apple")); // "red"
console.log(map.has("apple")); // true
map.remove("apple");
console.log(map.has("apple")); // false
map.clear();
console.log(map.length()); // 0
```

## Running the Example
To run the example provided in `main.js`, you can use Node.js. Navigate to the project directory and run:

```bash
node main.js
```

This will execute the example code and demonstrate the functionality of the HashMap implementation.