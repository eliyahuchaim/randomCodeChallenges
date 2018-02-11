function queue(data) {
  var node = {data: data, next:null}
  this.head = node
}

queue.prototype.insert = function(data){
  if (!this.head.data) {
    this.head = {data: data, next: null}
    console.log("created and inserted head");
  } else {
    let current = this.head
    while(current.next !== null){
      current = current.next
    }
    current.next = {data: data, next:null}
    console.log("inserted", current.next);
  }
}

queue.prototype.getLast = function() {
  let current = this.head
    while(current.next !== null){
      current = current.next
    }
    return current
}

queue.prototype.remove = function() {
  var removedQueue = {data: this.head.data, next: this.head.next}
  this.head = this.head.next
  console.log("removed:", removedQueue, "from queue")
}


var test1 = new queue("one");
test1.insert("two")
test1.insert("three")
test1.insert("four")
test1.remove()


var test2 = new que();
