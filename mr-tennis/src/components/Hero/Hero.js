import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Bem-vindo ao Mr. Tennis!</h1>
        <p>
          Aprenda, jogue e divirta-se com o melhor do Tennis e beach Tennis.
        </p>
        <button>Saiba Mais</button>
      </div>
    </section>
  );
}

export default Hero;
