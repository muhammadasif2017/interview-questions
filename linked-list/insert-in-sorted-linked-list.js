class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  lookup(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  remove(index) {
    if (index <= 0) {
      this.head = this.head.next;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next = null;
    this.length--;
    return this.printList();
  }

  insertInSortedLinkedList(value) {
    if (value === undefined) {
      return null;
    } else {
      const node = new Node(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else if (this.head.value > node.value) {
        if (this.head.next === null) {
          this.tail = node.next;
        }
        node.next = this.head;
        this.head = node;
      } else if (this.tail.value < node.value) {
        this.tail.next = node;
        this.tail = node;
      } else {
        let currentNode = this.head.next;
        let prevNode = this.head;
        while (currentNode !== null) {
          if (node.value < currentNode.value) {
            node.next = currentNode;
            prevNode.next = node;
            break;
          }
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.insertInSortedLinkedList(5);
myLinkedList.insertInSortedLinkedList(6);
myLinkedList.insertInSortedLinkedList(2);
myLinkedList.insertInSortedLinkedList(8);
myLinkedList.insertInSortedLinkedList(7);
myLinkedList.insertInSortedLinkedList(4);
myLinkedList.insertInSortedLinkedList(0);
myLinkedList.insertInSortedLinkedList(3);
//myLinkedList.prepend();
// myLinkedList.insert(2, 100);
// console.log(myLinkedList.lookup(1));
console.log(myLinkedList.printList());
