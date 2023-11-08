import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/atoms';
import { Children } from 'react';
import styled from 'styled-components';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <TodoContainer>
      {Children.toArray(
        todoList.map(({ id, content, isComplete }) => (
          <TodoWrapper>
            <Toggle type='checkbox' />
            <Text>{content}</Text>
            <Button>Remove</Button>
          </TodoWrapper>
        ))
      )}
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.section`
  width: 80%;
  margin-top: 30px;
`;

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

const Text = styled.label`
  flex: 1;
  word-break: break-all;
  font-size: 24px;
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
