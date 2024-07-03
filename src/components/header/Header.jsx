import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <ul>
        <li>About me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
}
