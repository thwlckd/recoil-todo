import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Layout from './components/Layout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Layout>
          <Home />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
