import styled from 'styled-components';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Input />
        <TodoList />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
`;
