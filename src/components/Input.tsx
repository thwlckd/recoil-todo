import { useRef } from 'react';
import styled from 'styled-components';
import useTodoList from '../hooks/useTodoList';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodoList();

  const handleAddTodo = (e: React.KeyboardEvent) => {
    const input = inputRef.current?.value;

    if (e.key !== 'Enter' || !input) return;

    addTodo(input);

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
