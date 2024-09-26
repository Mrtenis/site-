import React, { useState } from "react";
import styles from "./Contact.module.scss";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    alert("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensagem:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
