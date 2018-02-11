function Queue() {

  this.stack1 = [];
  this.stack2 = [];

  this.dequeue = () => {
    if(this.stack2.length > 0){
      this.stack2.pop()
    } else {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop())
      }
      this.stack2.pop()
    }
  }

  this.enqueue = (data) => {
    // add to last of array
    this.stack1.push(data)
  }

  this.peek = () => {
    // show first element of que
    if(this.stack2.length > 0){
      console.log(this.stack2[this.stack2.length -1])
    } else {
      console.log(this.stack1[0])
    }
  }

  this.parseInput = (input) => {
    input = input.split('\n');
    for (i = 0; i < input.length; i++){
      let temp = input[i].split(" ");
        switch (temp[0]) {
          case "1":
            this.enqueue(temp[1])
            break;
          case "2":
            this.dequeue()
            break;
          case "3":
            this.peek()
            break;
        }
    }
  }


} //

var input = [ '10', '1 42', '2', '1 14', '3', '1 28', '3', '1 60', '1 78', '2', '2' ]



var q = new Queue

q.enqueue('1');
q.enqueue('2');
q.enqueue('3');
q.dequeue()
