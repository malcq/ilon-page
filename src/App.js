import Header from './components/Header/index.js';
import Content from './components/Content/index.js';

import { MainPage } from './styles';
function App() {
  return (
    <MainPage className="page">
      <Header />
      <Content />
    </MainPage>
  );
}

export default App;
