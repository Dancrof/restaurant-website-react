import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner className="banner"/>
      <Footer />
    </div>
  );
}

export default App;
