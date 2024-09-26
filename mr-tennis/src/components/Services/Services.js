// src/components/Services/Services.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./Services.module.scss";

function Services() {
  const services = [
    {
      title: "Aulas de Tênis",
      description: "Aprenda com os melhores profissionais.",
      image: "/images/lessons.jpg",
      link: "/services/aulas", // Add the link property
    },
    {
      title: "Locação de Quadras",
      description: "Quadras disponíveis para todos os níveis.",
      image: "/images/court.jpg",
      link: "/services/locacao-de-quadras", // Update as needed
    },
    {
      title: "Eventos Esportivos",
      description: "Participe de torneios e campeonatos.",
      image: "/images/events.jpg",
      link: "/services/eventos-esportivos", // Update as needed
    },
    {
      title: "Aulas de Beach Tênis",
      description: "Aprenda e divirta-se na areia.",
      image: "/images/beach-tennis.jpg",
      link: "/services/beach-tennis", // Update as needed
    },
  ];

  return (
    <section className={styles.services}>
      <h2>Nossos Serviços</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div className={styles.serviceItem} key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link}>
              <button>Saiba Mais</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
