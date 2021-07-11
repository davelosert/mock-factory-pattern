import { User } from "./User";

type Todo = {
  title: string;
  done: boolean;
  assignee: User;
  dueDate: Date;
  project: string;
  tags: string[];
}

const markTodoAsDone = (todo: Todo): Todo => ({
  ...todo,
  done: true
});

const assignTodo = (todo: Todo, user: User): Todo => ({
  ...todo,
  assignee: user
});

export {
 Todo,
 assignTodo,
 markTodoAsDone
};
