import "./WorldwideCompany.scss";

import { ReactComponent as ARG } from "../../assets/images/flags/arg.svg";
import { ReactComponent as ARM } from "../../assets/images/flags/arm.svg";
import { ReactComponent as KZ } from "../../assets/images/flags/kz.svg";
import { ReactComponent as SRB } from "../../assets/images/flags/srb.svg";
import { ReactComponent as TUR } from "../../assets/images/flags/tur.svg";
import { ReactComponent as UKR } from "../../assets/images/flags/ukr.svg";
import { ReactComponent as USA } from "../../assets/images/flags/usa.svg";
import { ReactComponent as Company } from "../../assets/images/text/company.svg";
import { ReactComponent as Worldwide } from "../../assets/images/text/worldwide.svg";

const countriesList = [
  {
    flag: <USA />,
    country: "USA",
  },
  {
    flag: <SRB />,
    country: "Serbia",
  },
  {
    flag: <ARG />,
    country: "Argentina",
  },
  {
    flag: <KZ />,
    country: "Kazakhstan",
  },
  {
    flag: <ARM />,
    country: "Armenia",
  },
  {
    flag: <UKR />,
    country: "Ukraine",
  },
  {
    flag: <TUR />,
    country: "Turkey",
  },
];

export const WorldwideCompany = () => {
  return (
    <section className="worldwide-company container">
      <h2 className="visually-hidden">Worldwide company</h2>
      <div className="worldwide-company__wrapper">
        <div className="worldwide-company__title">
          <Worldwide />
          <div>
            <span>02</span>
            <span>/</span>
          </div>
        </div>
        <div className="worldwide-company__description">
          <p>
            We have employees in USA / Argentina / Ukraine / Armenia / Turkey /
            Serbia / Kazakhstan
          </p>
          <Company />
        </div>
      </div>
      <ul className="worldwide-company__country-list">
        {countriesList.map(({ flag, country }) => (
          <li className="worldwide-company__country-item" key={country}>
            <div>
              {flag}
              <p>{country}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
