import Skills from '../Skills/Skills';
import AboutMe from '../about-me/AboutMe';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Portfolio from '../portfolio/Portfolio';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
    </div>
  );
}
