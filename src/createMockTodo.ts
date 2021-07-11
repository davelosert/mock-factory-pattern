import cloneDeep from 'lodash.clonedeep';
import { createMockUser } from './createMockUser';
import { Todo } from './Todo';

const defaultTodo: Todo = {
  title: 'Default Todo Title',
  done: false,
  assignee: createMockUser(),
  dueDate: new Date('2021-07-04'),
  project: 'Writing Blogposts',
  tags: ['writing', 'blogs']
}

const createMockTodo = (overwrites: Partial<Todo> = {}) => {
  return cloneDeep({
    ...defaultTodo,
    ...overwrites
  });
};

export {
  createMockTodo
}
