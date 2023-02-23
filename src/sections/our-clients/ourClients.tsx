import "./ourClients.scss";

import ScrollContainer from "react-indiana-drag-scroll";

import { ReactComponent as BurgerKing } from "../../assets/images/clients/burger-king.svg";
import { ReactComponent as Cisco } from "../../assets/images/clients/cisco.svg";
import { ReactComponent as Daymap } from "../../assets/images/clients/daymap.svg";
import { ReactComponent as Dow } from "../../assets/images/clients/dow.svg";
import { ReactComponent as Fitbit } from "../../assets/images/clients/fitbit.svg";
import { ReactComponent as Google } from "../../assets/images/clients/google.svg";
import { ReactComponent as Hp } from "../../assets/images/clients/hp.svg";
import { ReactComponent as HSBC } from "../../assets/images/clients/hsbc.svg";
import { ReactComponent as Brandsource } from "../../assets/images/clients/logo_brandsource.svg";
import { ReactComponent as Comodo } from "../../assets/images/clients/logo_comodo.svg";
import { ReactComponent as Ecwid } from "../../assets/images/clients/logo_ecwid.svg";
import { ReactComponent as Emojme } from "../../assets/images/clients/logo_emojme.svg";
import { ReactComponent as EzLynk } from "../../assets/images/clients/logo_ezlynk.svg";
import { ReactComponent as Firecore } from "../../assets/images/clients/logo_firecore.svg";
import { ReactComponent as FitnessBank } from "../../assets/images/clients/logo_fitnessbank.svg";
import { ReactComponent as Grainger } from "../../assets/images/clients/logo_grainger.svg";
import { ReactComponent as Grants } from "../../assets/images/clients/logo_grants.svg";
import { ReactComponent as Greenlinks } from "../../assets/images/clients/logo_greenlinks.svg";
import { ReactComponent as HenryFord } from "../../assets/images/clients/logo_henry_ford.svg";
import { ReactComponent as Kensington } from "../../assets/images/clients/logo_kensington_presentair.svg";
import { ReactComponent as LeroyMerlin } from "../../assets/images/clients/logo_leroy_merlin.svg";
import { ReactComponent as Mayday } from "../../assets/images/clients/logo_mayday.svg";
import { ReactComponent as MiMedia } from "../../assets/images/clients/logo_mimedia.svg";
import { ReactComponent as Novartis } from "../../assets/images/clients/logo_novartis_pharma.svg";
import { ReactComponent as OnInFour } from "../../assets/images/clients/logo_oneinfour.svg";
import { ReactComponent as Origo } from "../../assets/images/clients/logo_origo.svg";
import { ReactComponent as Shots } from "../../assets/images/clients/logo_shots.svg";
import { ReactComponent as Stada } from "../../assets/images/clients/logo_stada.svg";
import { ReactComponent as Thnks } from "../../assets/images/clients/logo_thnks.svg";
import { ReactComponent as Tonal } from "../../assets/images/clients/logo_tonal.svg";
import { ReactComponent as MercedesBenz } from "../../assets/images/clients/mercedes-benz.svg";
import { ReactComponent as PhilipMorris } from "../../assets/images/clients/philip-morris.svg";
import { ReactComponent as SAP } from "../../assets/images/clients/sap.svg";
import { ReactComponent as SNS } from "../../assets/images/clients/sns.svg";
import { ReactComponent as Thomson } from "../../assets/images/clients/thomson_reuters.svg";
import { ReactComponent as WorldSkills } from "../../assets/images/clients/world-skills.svg";
import { ReactComponent as Arrow } from "../../assets/images/icon/button/arrow.svg";
import { ReactComponent as OurClient } from "../../assets/images/text/our-clients.svg";

interface Clients {
  firstRow: { logo: JSX.Element; story?: string }[];
  secondRow: { logo: JSX.Element; story?: string }[];
}

const clientsList: Clients = {
  firstRow: [
    {
      logo: <Google />,
    },
    {
      logo: <Fitbit />,
      story: "Success story",
    },
    {
      logo: <BurgerKing />,
      story: "Success story",
    },
    {
      logo: <WorldSkills />,
    },
    {
      logo: <Dow />,
    },
    {
      logo: <Daymap />,
    },
    {
      logo: <Thnks />,
    },
    {
      logo: <Thomson />,
    },
    {
      logo: <WorldSkills />,
    },
    {
      logo: <OnInFour />,
    },
    {
      logo: <Origo />,
    },
    {
      logo: <Tonal />,
    },
    {
      logo: <Novartis />,
    },
    {
      logo: <Shots />,
    },
    {
      logo: <Mayday />,
    },
    {
      logo: <HenryFord />,
    },
    {
      logo: <FitnessBank />,
    },
    {
      logo: <Greenlinks />,
    },
    {
      logo: <Grants />,
    },
  ],
  secondRow: [
    {
      logo: <MercedesBenz />,
    },
    {
      logo: <Cisco />,
    },
    {
      logo: <PhilipMorris />,
    },
    {
      logo: <SAP />,
    },
    {
      logo: <SNS />,
    },
    {
      logo: <LeroyMerlin />,
    },
    {
      logo: <MiMedia />,
    },
    {
      logo: <Kensington />,
    },
    {
      logo: <Google />,
    },
    {
      logo: <Grainger />,
    },
    {
      logo: <Firecore />,
    },
    {
      logo: <Ecwid />,
    },
    {
      logo: <EzLynk />,
    },
    {
      logo: <Comodo />,
    },
    {
      logo: <Brandsource />,
    },
    {
      logo: <HSBC />,
    },
    {
      logo: <Stada />,
    },
    {
      logo: <Emojme />,
    },
    {
      logo: <Hp />,
    },
  ],
};

export const OurClients = () => {
  return (
    <section className="our-clients">
      <div className="our-clients__wrapper container">
        <OurClient />
        <div className="our-clients__description">
          <div className="our-clients__counter">
            <span>/</span>
            <span>04</span>
          </div>
          <p>
            Mercury Development's success is a reflection of our clients'
            success. There are the companies – some featuring incredible,
            customer-approved Case Studies – we've worked with during the last
            23 years.
          </p>
        </div>
      </div>
      <ScrollContainer component="table" className="our-clients__table">
        <tr>
          {clientsList.firstRow.map(({ logo, story }, i) => (
            <td className="our-clients__item" key={`client-${i}-first`}>
              {logo}
              <>{story && <button>{story}</button>}</>
            </td>
          ))}
        </tr>
        <tr>
          {clientsList.secondRow.map(({ logo, story }, i) => (
            <td className="our-clients__item" key={`client-${i}-second`}>
              {logo}
              <>{story && <button>{story}</button>}</>
            </td>
          ))}
        </tr>
      </ScrollContainer>
      <a href="#!" className="our-clients__more">
        More testimonials on clutch
        <Arrow />
      </a>
      <div className="our-clients__video">
        <p>More than 1000 apps</p>
      </div>
    </section>
  );
};
