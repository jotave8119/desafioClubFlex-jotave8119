import "./about.css";

const About = () => {
  return (
    <section className="aboutContent">
      <p className="aboutUs">
        A MedLife tem por objetivo trazer benefícios de alta qualidade para você
        e sua família, te direcionando até as nossas empresas parceiras. São
        desocntos em consultas, exames, medicamentos, procedimentos etc.
        Trabalhamos com os melhores profissionais do mercado. Confira alguns de
        nossos planos e também algumas das empresas parceiras.
      </p>
      <h2 className="plansText">Planos</h2>
      <ul className="plansCards">
        <li className="planList">
          <h3 className="planTitle">Básico</h3>
          <div className="listDescription">
            <p className="description">* Até 3 dependentes</p>
            <p className="description">* 12 meses de acesso</p>
            <p className="description">* 1 consultas grátis por mês</p>
            <p className="description">* Pronto atendimento</p>
            <span className="price">por $79,90</span>
            <div className="signDiv">
              <span className="sign">Assine já</span>
            </div>
          </div>
        </li>
        <li className="planList">
          <h3 className="planTitle">Plus</h3>
          <div className="listDescription">
            <p className="description">* Até 5 dependentes</p>
            <p className="description">* 12 meses de acesso</p>
            <p className="description">* 2 consultas grátis por mês</p>
            <p className="description">* Pronto atendimento</p>
            <span className="price">por $99,90</span>
            <div className="signDiv">
              <span className="sign">Assine já</span>
            </div>
          </div>
        </li>
        <li className="planList">
          <h3 className="planTitle">Premium</h3>
          <div className="listDescription">
            <p className="description">* Até 7 dependentes</p>
            <p className="description">* 12 meses de acesso</p>
            <p className="description">* 3 consultas grátis por mês</p>
            <p className="description">* Pronto atendimento</p>
            <span className="price">por $129,90</span>
            <div className="signDiv">
              <span className="sign">Assine já</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;
