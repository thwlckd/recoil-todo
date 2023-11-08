import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/atoms';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <TodoContainer>
      {todoList.map(({ id, content, isComplete }) => (
        <Todo key={id} id={id} content={content} isComplete={isComplete} />
      ))}{' '}
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.section`
  width: 80%;
  margin-top: 30px;
`;
