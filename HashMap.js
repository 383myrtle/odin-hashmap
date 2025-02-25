import { LinkedList } from "./LinkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const list = this.buckets[hashCode];
    if (list) {
      // Check if key in bucket and update value.
      for (let n = 0; n < list.size; n++) {
        const node = list.at(n);
        if (node.key === key) {
          node.value = value;
          console.log("Updated value of " + key);
          return;
        }
      }
      // If key not in bucket, append it to the list
      list.append(key, value);
      console.log("Collision: added new key " + key + " to the bucket");
    } else {
      this.buckets[hashCode] = new LinkedList();
      this.buckets[hashCode].append(key, value);
    }
    if (this.length() > this.capacity * this.loadFactor) {
      this.capacity = this.capacity * 2;
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const list = this.buckets[hashCode];
    if (list) {
      const index = list.find(key);
      if (index !== null) {
        return list.at(index);
      }
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const list = this.buckets[hashCode];

    if (list) {
      return list.contains(key);
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const list = this.buckets[hashCode];
    if (list) {
      const index = list.find(key);
      if (index !== null) {
        list.removeAt(index);
        return true;
      }
    }
    return false;
  }

  length() {
    let length = 0;
    this.buckets.forEach((list) => {
      if (list) {
        length += list.size;
      }
    });
    return length;
  }

  clear() {
    this.buckets = [];
    this.capacity = 16;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((list) => {
      if (list) {
        for (let n = 0; n < list.size; n++) {
          const node = list.at(n);
          keys.push(node.key);
        }
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.buckets.forEach((list) => {
      if (list) {
        for (let n = 0; n < list.size; n++) {
          const node = list.at(n);
          values.push(node.value);
        }
      }
    });
    return values;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((list) => {
      if (list) {
        for (let n = 0; n < list.size; n++) {
          const node = list.at(n);
          entries.push([node.key, node.value]);
        }
      }
    });
    return entries;
  }

  toString() {
    this.buckets.forEach((list) => {
      if (list) {
        console.log(list.toString());
      }
    });
  }
}
