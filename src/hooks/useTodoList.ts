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

  return { addTodo };
};

export default useTodoList;
