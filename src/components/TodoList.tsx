import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/atoms';
import styled from 'styled-components';
import Todo from './Todo';
import { Children, useState } from 'react';

const NAV_BTNS = ['ALL', 'ACTIVE', 'COMPLETE'];

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const [todoListType, setTodoListType] = useState('ALL');

  return (
    <TodoContainer>
      {todoList.map(({ id, content, isComplete }) => {
        if (todoListType === 'ALL')
          return (
            <Todo key={id} id={id} content={content} isComplete={isComplete} />
          );
        else if (todoListType === 'ACTIVE')
          return (
            isComplete || (
              <Todo
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
              />
            )
          );
        else
          return (
            isComplete && (
              <Todo
                key={id}
                id={id}
                content={content}
                isComplete={isComplete}
              />
            )
          );
      })}
      <TodoNav>
        {Children.toArray(
          NAV_BTNS.map((btn) => (
            <NavBtn
              onClick={() => setTodoListType(btn)}
              $textDeco={todoListType === btn ? 'underline' : 'none'}
            >
              {btn}
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
