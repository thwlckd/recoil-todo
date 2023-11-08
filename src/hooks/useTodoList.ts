import { useRecoilState } from 'recoil';
import { todoListState } from '../store/atoms';

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = (content: string) => {
    setTodoList((prev) => [
      ...prev,
      {
        id: todoList.length + 1,
        content,
        isComplete: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    setTodoList(newTodoList);
  };

  return { addTodo, toggleTodo };
};

export default useTodoList;
