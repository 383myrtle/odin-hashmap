import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  set head(newHead) {
    this._head = newHead;
  }
  get head() {
    return this._head;
  }
  set tail(newTail) {
    this._tail = newTail;
  }
  get tail() {
    return this._tail;
  }
  set size(newSize) {
    this._size = newSize;
  }
  get size() {
    return this._size;
  }

  append(key, value) {
    if (this.size === 0) {
      this.head = new Node(key, value);
      this.tail = this.head;
    } else {
      const node = new Node(key, value);
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(key, value) {
    if (this.size === 0) {
      this.head = new Node(key, value);
      this.tail = this.head;
    } else {
      const node = new Node(key, value);
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  at(index) {
    let n = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (n === index) {
        return pointer;
      }
      pointer = pointer.next;
      n++;
    }
  }

  contains(key) {
    let pointer = this.head;
    while (pointer !== null) {
      if (key === pointer.key) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  findIndex(key) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (key === pointer.key) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  findNode(key){
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (key === pointer.key) {
        return pointer;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  insertAt(index, key, value) {
    const node = new Node(key, value);
    const prev = this.at(index);
    node.next = prev.next;
    prev.next = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    const node = this.at(index);
    const prev = this.at(index - 1);
    prev.next = node.next;
    if (index === this.size - 1) {
      this.tail = prev;
    }
    this.size--;
  }

  pop() {
    let pointer = this.head;
    const node = this.tail;
    while (pointer !== null) {
      if (pointer.next === node) {
        pointer.next = null;
        this.tail = pointer;
      }
      pointer = pointer.next;
    }
    return node;
  }

  toString() {
    let pointer = this.head;
    let str = "";
    while (pointer !== null) {
      str = str + `(${pointer.key}: ${pointer.value}) -> `;
      pointer = pointer.next;
    }
    str += "null";
    return str;
  }
}
