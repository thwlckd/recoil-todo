import { atom } from 'recoil';
import { ITodo } from '../types/todo';

const getLocalStorage = () => {
  const keys = Object.keys(localStorage);
  const data = [];

  for (const key of keys) {
    const item = localStorage.getItem(key);
    if (item) {
      const value = JSON.parse(item);
      data.push(value);
    }
  }

  return data;
};

const todoListState = atom<ITodo[]>({
  key: 'todoListState',
  default: getLocalStorage(),
});

export { todoListState };
