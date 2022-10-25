import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>{`<devAndreas>`}</h1>
        <p>Hello World</p>
        <h1>{`</devAndreas>`}</h1>
      </div>
      <button className={styles.navToggle} aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className="nav__item">
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className={styles.navLink}>
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className={styles.navLink}>
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className={styles.navLink}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
