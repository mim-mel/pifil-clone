import './App.css';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import MainPage from './page/MainPage.jsx';

function App() {
  return (
    <div className='App'>
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
