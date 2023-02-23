import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/images/logotype/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <a href="#!" className="header__logo">
          <Logo />
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a href="#!">What we do</a>
            </li>
            <li>
              <a href="#!">Portfolio</a>
            </li>
            <li>
              <a href="#!">Company</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Contacts</a>
            </li>
          </ul>
          <button type="button">Request Estimate</button>
        </nav>
      </div>
    </header>
  );
};
