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

  function at(index) {
    let searchedNode = head;
    for (let i = 0; i < index; i++) {
      if (!searchedNode.nextNode) return null;
      searchedNode = searchedNode.nextNode;
    }

    return searchedNode;
  }

  function pop() {
    let beforeLast = at(size - 2);
    let popped = tail;
    beforeLast.nextNode = null;
    tail = beforeLast;
    size -= 1;
    return popped;
  }

  function contains(value) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  function find(value) {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (current.value === value) return i;
      current = current.nextNode;
    }

    return null;
  }

  function toString() {
    console.log(JSON.stringify(head));
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
    at,
    pop,
    contains,
    find,
    toString,
  };
}

let linked = createLinkedList();

linked.append(3);
linked.append(4);
linked.append(5);
linked.append("dupa");
linked.append(3);
linked.append(4);
linked.append(5);
linked.append("dupa");

linked.toString();
