import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/atoms';

const useTodoList = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = (content: string) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        content,
        isComplete: false,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodoList((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        else return todo;
      }),
    ]);
  };

  const removeTodo = (id: string) => {
    setTodoList((prev) => [...prev.filter((todo) => todo.id !== id)]);
  };

  return { addTodo, toggleTodo, removeTodo };
};

export default useTodoList;
