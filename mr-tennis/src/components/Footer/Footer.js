import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} Mr. Tennis. Todos os direitos
          reservados.
        </p>
        <div className={styles.socialMedia}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with social media icons */}
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
