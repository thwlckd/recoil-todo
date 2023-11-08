import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        Created by <Bold>Hyub2</Bold>
      </Content>
      <Content>
        Series of <Bold>Todo App</Bold> using{' '}
        <Bold>State Management Libraries</Bold>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 5dvh;
  margin-top: 2dvh;
  text-align: center;
`;

const Content = styled.p`
  color: #808080;
`;

const Bold = styled.b`
  color: #000;
  font-weight: bold;
`;
