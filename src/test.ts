import { createMockTodo } from "./createMockTodo";

const myFirstTodo = createMockTodo();
console.log(myFirstTodo.assignee.firstName); 
myFirstTodo.assignee.firstName = 'Fabio';

const mySecondTodo = createMockTodo();
console.log(mySecondTodo.assignee.firstName); 
