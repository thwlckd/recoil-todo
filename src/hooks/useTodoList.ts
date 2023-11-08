import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/atoms';

const useTodoList = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = (content: string) => {
    const id = crypto.randomUUID();
    const newTodo = { id, content, isComplete: false };

    localStorage.setItem(id, JSON.stringify(newTodo));

    setTodoList((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const item = localStorage.getItem(id);

    if (item) {
      const { id, content, isComplete } = JSON.parse(item);
      localStorage.setItem(
        id,
        JSON.stringify({ id, content, isComplete: !isComplete })
      );
    }

    setTodoList((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        else return todo;
      }),
    ]);
  };

  const removeTodo = (id: string) => {
    localStorage.removeItem(id);

    setTodoList((prev) => [...prev.filter((todo) => todo.id !== id)]);
  };

  return { addTodo, toggleTodo, removeTodo };
};

export default useTodoList;
