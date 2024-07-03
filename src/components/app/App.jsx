// import css from './App.module.css';

import Skills from '../Skills/Skills';
import AboutMe from '../about-me/AboutMe';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Portfolio from '../portfolio/Portfolio';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}
