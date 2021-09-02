import './App.css';
import Navbar from './components/Navbar';
import themeGlobal from './themeConfig';

import {Slideshow, Slide, TextoSlide} from './components/Banner';
//import styled from 'styled-components';

import Footer from './components/Footer';
import Content from './components/Content';

import banner1 from './img/banner/banner.jpg'
import banner2 from './img/banner/banner2.jpg'
import banner3 from './img/banner/banner3.png'
import { ThemeProvider } from 'styled-components';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={themeGlobal}>
      <Navbar />
      </ThemeProvider>
      <Slideshow controles={true}>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={banner1} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={banner2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={banner3} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
