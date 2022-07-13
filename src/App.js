import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
