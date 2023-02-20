import "./contact.css";

const ContactForm = () => {
  return (
    <section className="formContent" id="contactForm">
      <h3 className="formTitle">Fale com um consultor</h3>
      <form className="form">
        <label className="label">Nome:</label>
        <input type="text" placeholder="Nome" />
        <label className="label">Email:</label>
        <input type="text" placeholder="Email" />
        <label className="label">Cidade:</label>
        <input type="text" placeholder="Cidade" />
        <label className="label">Estado:</label>
        <input type="text" placeholder="Estado" />
        <label className="label">Telefone:</label>
        <input type="text" placeholder="Telefone" />
        <button className="btnForm" title="Enviar dados!">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
