import { LinkedList } from "./LinkedList.js";

function initializeLists(capacity) {
  const arr = [];
  for (let i = 0; i < capacity; i++) {
    arr[i] = new LinkedList();
  }
  return arr;
}

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = initializeLists(this.capacity);
    this.size = 0;
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
    const list = this.buckets[hashCode];

    const node = list.findNode(key);
    if (node) {
      node.value = value;
      console.log("Updated value of " + key);
    } else {
      list.append(key, value);
      this.size++;
    }

    if (this.length() > this.capacity * this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const list = this.buckets[hashCode];
    const node = list.findNode(key);
    return node ? node.value : null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const list = this.buckets[hashCode];
    return list.contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (hashCode < 0 || hashCode >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    const list = this.buckets[hashCode];
    const index = list.findIndex(key);
    if (index !== null) {
      list.removeAt(index);
      this.size--;
      return true;
    }
    return false;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity = this.capacity * 2;
    this.buckets = initializeLists(this.capacity);
    this.size = 0;
    oldBuckets.forEach((list) => {
      let current = list.head;
      while (current) {
        this.set(current.key, current.value);
        current = current.next;
      }
    });
  }

  length() {
    return this.size;
  }

  clear() {
    this.capacity = 16;
    this.buckets = initializeLists(this.capacity);
    this.size = 0;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((list) => {
      let current = list.head;
      while (current) {
        keys.push(current.key);
        current = current.next;
      }
    });
    return keys;
  }

  values() {
    const values = [];
    this.buckets.forEach((list) => {
      let current = list.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }
    });
    return values;
  }

  entries() {
    const entries = [];
    this.buckets.forEach((list) => {
      let current = list.head;
      while (current) {
        entries.push([current.key, current.value]);
        current = current.next;
      }
    });
    return entries;
  }

  toString() {
    this.buckets.forEach((list, index) => {
      console.log(`${index}. ${list.toString()}`);
    });
  }
}
