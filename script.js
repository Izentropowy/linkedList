function createNode() {
  return {
    value: null,
    nextNode: null,
  };
}

function createLinkedList() {
  let size = 0;
  let head = null;
  let tail = null;

  function append(value) {
    let node = createNode();
    node.value = value;
    if (size === 0) {
      head = node;
      tail = node;
    } else {
      tail.nextNode = node;
      tail = node;
    }
    size += 1;
  }

  function prepend(value) {
    let node = createNode();
    node.value = value;
    if (size === 0) {
      head = node;
      tail = node;
    } else {
      node.nextNode = head;
      head = node;
    }
    size += 1;
  }

  return {
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    get size() {
      return size;
    },
    append,
    prepend,
  };
}

let linked = createLinkedList();
linked.append(4);
console.log(linked.head);
console.log(linked.tail);
console.log("----");
linked.append(40);
console.log(linked.head);
console.log(linked.tail);
console.log("----");
linked.prepend(3);
console.log(linked.head);
console.log(linked.tail);
console.log("----");
