import { selectorFamily } from 'recoil';
import { todoListState } from './atoms';

const LIST_TYPE = ['ALL', 'ACTIVE', 'COMPLETE'];

const todoListActiveState = selectorFamily({
  key: 'todoListActiveState',
  get:
    (status) =>
    ({ get }) => {
      const todoList = get(todoListState);
      if (status === LIST_TYPE[0]) return todoList;
      else if (status === LIST_TYPE[1])
        return todoList.filter(({ isComplete }) => !isComplete);
      else return todoList.filter(({ isComplete }) => isComplete);
    },
});

export { LIST_TYPE, todoListActiveState };
