import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  min-height: 100dvh;
  margin: auto;
`;
