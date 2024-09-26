import React from "react";
import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2>Sobre Nós</h2>
        <p>
          No Mr. Tennis, oferecemos a melhor experiência em tênis, seja para
          iniciantes ou profissionais. Nossa equipe é dedicada a proporcionar
          aulas de alta qualidade, eventos emocionantes e instalações de
          primeira classe.
        </p>
      </div>
      <div className={styles.image}>
        <img src="/images/about-us.jpg" alt="Sobre Nós" />
      </div>
    </section>
  );
}

export default About;
