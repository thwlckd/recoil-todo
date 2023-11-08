import styled from 'styled-components';

const Header = () => {
  return <HeaderContainer>Recoil Todos</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 15dvh;
  line-height: 15dvh;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  color: #3678e5;
`;
