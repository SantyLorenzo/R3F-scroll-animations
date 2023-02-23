import "./Footer.scss";

import { ReactComponent as AppFuturaBadge } from "../../assets/images/footer/appfutura.svg";
import { ReactComponent as FindBestBadge } from "../../assets/images/footer/findbest.svg";
import { ReactComponent as GoodFirmsBadge } from "../../assets/images/footer/goodfirms.svg";
import { ReactComponent as TopDeveloperBadge } from "../../assets/images/footer/topdeveloper.svg";
import { ReactComponent as TopWearableBadge } from "../../assets/images/footer/topwearable.svg";
import { ReactComponent as UpCityBadge } from "../../assets/images/footer/upcity.svg";
import { ReactComponent as FB } from "../../assets/images/icon/social/fb.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon/social/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/icon/social/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon/social/twitter.svg";

const socialList = [
  {
    icon: <LinkedIn />,
    link: "#!",
  },
  {
    icon: <Instagram />,
    link: "#!",
  },
  {
    icon: <Twitter />,
    link: "#!",
  },
  {
    icon: <FB />,
    link: "#!",
  },
];

const awardsList = [
  {
    icon: <GoodFirmsBadge />,
    link: "#!",
  },
  {
    icon: <TopWearableBadge />,
    link: "#!",
  },
  {
    icon: <FindBestBadge />,
    link: "#!",
  },
  {
    icon: <UpCityBadge />,
    link: "#!",
  },
  {
    icon: <TopDeveloperBadge />,
    link: "#!",
  },
  {
    icon: <AppFuturaBadge />,
    link: "#!",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div className="footer__contact">
        <div className="footer__copyright">
          <p>© 1999-{currentYear} MERCURY DEVELOPMENT LLC</p>
          <a href="mailto:sales@mercurydevelopment.com">
            sales@mercurydevelopment.com
          </a>
        </div>
        <ul className="footer__social-list">
          {socialList.map(({ icon, link }, i) => (
            <li key={`social-${i}`}>
              <a href={link}>{icon}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__login">
          <li>
            <a href="#!">SUPPORT</a>
          </li>
          <li>
            <a href="#!">CUSTOMER LOGIN</a>
          </li>
        </ul>
      </div>
      <ul className="footer__awards-list">
        {awardsList.map(({ icon, link }, i) => (
          <li key={`award-${i}`}>
            <a href={link}>{icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
