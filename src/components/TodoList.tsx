import { Children, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { LIST_TYPE, todoListActiveState } from '../store/selectors';
import Todo from './Todo';

const TodoList = () => {
  const [todoListType, setTodoListType] = useState('ALL');
  const todoList = useRecoilValue(todoListActiveState(todoListType));

  return (
    <TodoContainer>
      {todoList.map(({ id, content, isComplete }) => (
        <Todo key={id} id={id} content={content} isComplete={isComplete} />
      ))}
      <TodoNav>
        {Children.toArray(
          LIST_TYPE.map((type) => (
            <NavBtn
              onClick={() => setTodoListType(type)}
              $textDeco={todoListType === type ? 'underline' : 'none'}
            >
              {type}
            </NavBtn>
          ))
        )}
      </TodoNav>
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.section`
  width: 80%;
  margin-top: 30px;
`;

const TodoNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
`;

const NavBtn = styled.button<{ $textDeco: string }>`
  border: none;
  background-color: inherit;
  text-decoration: ${({ $textDeco }) => $textDeco};

  &:hover {
    text-decoration: underline;
  }
`;
