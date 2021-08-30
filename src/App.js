import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner className="banner"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
