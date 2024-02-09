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
    return JSON.stringify(head);
  }

  function insertAt(value, index) {
    if (index >= size || index < 0) return;

    let newNode = createNode();
    newNode.value = value;
    if (index === 0) {
      newNode.nextNode = head;
      head = newNode;
    } else if (index === size - 1) {
      tail.nextNode = newNode;
      tail = newNode;
    } else {
      let previous = at(index - 1);
      let next = at(index);

      previous.nextNode = newNode;
      newNode.nextNode = next;
    }
    size += 1;
  }

  function removeAt(index) {
    if (index >= size || index < 0) return;
    if (index === 0) {
      let tmp = head.nextNode;
      head = tmp;
    } else if (index === size - 1) {
      let lastButOne = at(size - 2);
      lastButOne.nextNode = null;
      tail = lastButOne;
    } else {
      let previous = at(index - 1);
      let next = at(index + 1);

      previous.nextNode = next;
    }
    size -= 1;
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
    insertAt,
    removeAt,
  };
}
