function createNode(val, next = null){
  return {value: val, next: next}
}

function linkedList(val){
    this.head = createNode(val, null);
  }


  linkedList.prototype.insert = function(val){
    var node = createNode(val);
    let current = this.head;
      while(current.next){
        current = current.next
      }
      current.next = node
  }

  linkedList.prototype.insertAt = function(index, val, next) {
    let previousNode = this.nodeAt(index - 1);
    let currentNode = this.nodeAt(index);

    let newNode = createNode(val, currentNode);
    previousNode.next = newNode;
  };

  linkedList.prototype.nodeAt = function(index) {
    let current = this.head;
      for (i = 0; i < index; i++){
        current = current.next
      }
      return current;
  };

  linkedList.prototype.deleteHead = function() {
    this.head = this.nodeAt(1);
  };

  linkedList.prototype.deleteAt = function(index){
    if (index === 0){
      this.deleteHead();
    } else {
    let previousNode = this.nodeAt(index -1);
    let nextNode = this.nodeAt(index +1);
    previousNode.next = nextNode;
    }
  }
