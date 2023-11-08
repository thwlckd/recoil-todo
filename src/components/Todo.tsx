import styled from 'styled-components';
import { ITodo } from '../types/todo';
import { useState } from 'react';
import useTodoList from '../hooks/useTodoList';

const Todo = ({ id, content, isComplete }: ITodo) => {
  const [isChecked, setIsChecked] = useState(isComplete);
  const { toggleTodo, removeTodo } = useTodoList();

  const handleToggleTodo = () => {
    setIsChecked((prev) => !prev);
    toggleTodo(id);
  };

  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  return (
    <TodoWrapper>
      <Toggle type='checkbox' onClick={handleToggleTodo} />
      <Text $isChecked={String(isChecked)}>{content}</Text>
      <Button onClick={handleRemoveTodo}>Remove</Button>
    </TodoWrapper>
  );
};

export default Todo;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 7dvh;
  margin-bottom: 10px;
  box-shadow: 3px 3px 5px #99b6e8;
  background-color: #fff;
`;

const Toggle = styled.input`
  width: 4dvh;
  height: 4dvh;
  margin: 0 10px;
`;

const Text = styled.p<{ $isChecked: string }>`
  flex: 1;
  word-break: break-all;
  font-size: 24px;
  text-decoration: ${({ $isChecked }) =>
    $isChecked === 'true' ? 'line-through' : 'none'};
`;

const Button = styled.button`
  margin: 0 10px;
  height: 3dvh;
  border: none;
  background-color: salmon;
  color: white;

  &:hover {
    background-color: #ff6561;
  }
`;
