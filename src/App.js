import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  const [scroll, setScroll] = useState(0);

  return (
    <div className="App bg-gray-100">
      <Header setScroll={setScroll} />
      <AboutMe />
      <Skills />
      <Projects />
      <GetInTouch scroll={scroll} />
      <Footer />
    </div>
  );
}

export default App;
