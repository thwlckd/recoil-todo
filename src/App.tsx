import GlobalStyle from './style/GlobalStyle';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
