import * as assert from 'assert';
import { createMockTodo } from './createMockTodo';
import { createMockUser } from './createMockUser';
import { assignTodo, markTodoAsDone, Todo } from './Todo';

describe('Todo', () => {
  describe('.markTodoAsDone()', () => {
    it('markTodoAsDone sets done to true.', () => {
      const unfinishedTodo: Todo = createMockTodo({ done: false });

      const resultingTodo = markTodoAsDone(unfinishedTodo);
      
      assert.deepStrictEqual(resultingTodo.done, true);
    });
  });

  describe('.asignTodo()', () => {
    it('changes the assignee to the new given user.', () => {
      const givenTodo = createMockTodo({
        assignee: createMockUser({ id: 'oldId' })
      });
      const expectedUser = createMockUser({ id: 'newId' });
      
      const { assignee: actualUser } = assignTodo(givenTodo, expectedUser);
      
      assert.deepStrictEqual(actualUser, expectedUser);
    });
  });
})
