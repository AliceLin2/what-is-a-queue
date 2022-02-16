class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if(this.queue.length<10){
      this.queue.push(item)
      return this.queue
    }else{
      return error 
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0]
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    if(this.queue.length===0){
      return true
    }else{
      return false
    }
  }

  // return true if queue is full, otherwise false
  isFull() {
    if(this.queue.length===this.limit){
      return true
    }else{
      return false
    }
  }

  // return number of items in queue
  size() {
    return this.queue.length
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    if(this.queue.indexOf(target)!==-1){
      return this.queue.indexOf(target)
    }else{
      return -1
    }
  }

  // print contents of queue: do not return the queue itself!
  print() {
    this.queue.forEach((item)=>console.log(item))
  }
}

if (require.main === module) {
  // add your own tests in here
  const testQueue = new Queue()
  testQueue.queue = [4,8,3,6]

  console.log("Expecting: [4,8,3,6,5]");
  console.log("=>", testQueue.enqueue(5));

  console.log("Expecting: 4");
  console.log("=>", testQueue.dequeue());

  console.log("Expecting: 8");
  console.log("=>", testQueue.peek());

  console.log("Expecting: false");
  console.log("=>", testQueue.isEmpty());

  console.log("Expecting: false");
  console.log("=>", testQueue.isFull());

  console.log("Expecting: 4");
  console.log("=>", testQueue.size());

  console.log("Expecting: 0");
  console.log("=>", testQueue.search(8));

  console.log("Expecting: 8, 3, 6, 5");
  console.log("=>", testQueue.print());
}

module.exports = Queue;
