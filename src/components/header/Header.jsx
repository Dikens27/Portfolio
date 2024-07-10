import css from './Header.module.css';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <ScrollLink to="about" smooth={true} duration={500}>
                About me
              </ScrollLink>
            </li>
            <li className={css.item}>
              <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
              </ScrollLink>
            </li>
            <li className={css.item}>
              <ScrollLink to="portfolio" smooth={true} duration={500}>
                Portfolio
              </ScrollLink>
            </li>
            <li className={css.item}>
              <ScrollLink to="contacts" smooth={true} duration={500}>
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
