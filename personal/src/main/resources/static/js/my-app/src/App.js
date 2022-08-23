import Approuter from './components/app-router';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Approuter />
      <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
