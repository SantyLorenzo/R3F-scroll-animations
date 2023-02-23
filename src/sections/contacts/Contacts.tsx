import "./Contacts.scss";

import { ReactComponent as SquareBracket } from "../../assets/images/icon/decor/square-bracket.svg";
import { Form } from "../../components/Form/Form";

export const Contacts = () => {
  return (
    <section className="contacts container">
      <h2 className="visually-hidden">Contacts</h2>
      <div className="contacts__wrapper">
        <div className="contacts__info">
          <h3>Need help?</h3>
          <p>
            Need help? Feel free to contact us and we'll respond as soon as
            possible.
          </p>
          <a
            className="contacts__email"
            href="mailto:sales@mercurydevelopment.com"
          >
            sales@mercurydevelopment.com
          </a>
          <a className="contacts__tel" href="tel:+13057672434">
            +1 305 767 2434
          </a>
        </div>
        <Form />
      </div>
      <button
        className="contacts__scroll-top"
        type="button"
        onClick={() => scrollTo(0, 0)}
      >
        <span>
          <SquareBracket />
        </span>
        Start Journey Again
        <span>
          <SquareBracket />
        </span>
      </button>
    </section>
  );
};
