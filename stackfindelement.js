let stack = [232, 43, 4, 5, 5, 45, 4664, 6566, 6];
let size = 10; // Define the maximum size of the stack

function isEmpty(stack) {
  if (stack.length === 0) {
    console.log("Stack is empty");
  }
}

function isFull(stack) {
  if (stack.length === size) {
    console.log("Stack is full");
  }
}

function insert(stack, element) {
  if (stack.length < size) {
    stack.push(element);
  }
}

function remove(stack) {
  if (stack.length > 0) {
    stack.pop();
  }
}

isEmpty(stack); 
isFull(stack); 

if (stack.length > 0) {
  console.log("First element:", stack[0]);
  console.log("Last element:", stack[stack.length - 1]);
}
