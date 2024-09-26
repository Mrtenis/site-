import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Mr. Tennis Saude</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
