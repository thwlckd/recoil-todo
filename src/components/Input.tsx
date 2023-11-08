import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListState } from '../store/atoms';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleAddTodo = (e: React.KeyboardEvent) => {
    const input = inputRef.current?.value;

    if (e.key !== 'Enter' || !input) return;

    setTodoList((prev) => [
      ...prev,
      {
        id: todoList.length + 1,
        content: input,
        isComplete: false,
      },
    ]);

    inputRef.current.value = '';
  };

  return (
    <InputTag
      placeholder='Add your Todo'
      ref={inputRef}
      onKeyDown={handleAddTodo}
    />
  );
};

export default Input;

const InputTag = styled.input`
  width: 80%;
  height: 7dvh;
  padding: 0;
  border: none;
  outline-color: #ff7e79;
  box-shadow: 3px 3px 5px #3678e5;
  font-size: 24px;
  text-indent: 10px;
`;
