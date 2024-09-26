// src/components/TennisLesson/TennisLesson.js
import React from "react";
import styles from "./Aulas.module.scss";

function TennisLesson() {
  return (
    <div className={styles.tennisLesson}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1>Aulas de Tênis</h1>
        <p>Aprenda tênis com nossos instrutores profissionais.</p>
      </section>

      {/* Image Banner */}
      <section className={styles.imageBanner}>
        <img src="/images/tennis-lesson-banner.jpg" alt="Aulas de Tênis" />
      </section>

      {/* Service Details */}
      <section className={styles.detailsSection}>
        <h2>Detalhes do Serviço</h2>
        <p>
          Nossas aulas individuais são projetadas para jogadores de todos os
          níveis, desde iniciantes até avançados. Com atenção personalizada,
          você aprimorará suas habilidades rapidamente.
        </p>
        <ul>
          <li>Instrutores certificados</li>
          <li>Horários flexíveis</li>
          <li>Equipamento incluso</li>
          <li>Aulas individuais</li>
          <li>Aulas em grupo</li>
          <li>Aulas em dupla</li>
        </ul>
      </section>

      {/* Pricing Information */}
      <section className={styles.pricingSection}>
        <h2>Unidades</h2>
        <div className={styles.pricingCard}>
          <h3>Ecoville</h3>
          <p>Quadra coberta</p>
          <button>Agendar Agora</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Santa Monica</h3>
          <p>Quadras abertas ao ar livre e cobertas em caso de chuva</p>
          <button>Agendar Agora</button>
        </div>
        <div className={styles.pricingCard}>
          <h3>Merces Tennis Club</h3>
          <p> Quadras cobertas e ao ar livre</p>
          <button>Agendar Agora</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Pronto para Começar?</h2>
        <button>Entre em Contato</button>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <div className={styles.faqItem}>
          <h4>Preciso trazer meu próprio equipamento?</h4>
          <p>Não, fornecemos todo o equipamento necessário.</p>
        </div>
        {/* Add more FAQ items as needed */}
      </section>
    </div>
  );
}

export default TennisLesson;
