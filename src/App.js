import './App.css';
import Footer from './components/Footer';
import Nav from './components/nav';
import MainPage from './page/MainPage';

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
