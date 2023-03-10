import "./About.scss";

import { ReactComponent as Play } from "../../assets/images/icon/button/play.svg";
import { ReactComponent as WeAre } from "../../assets/images/text/we-are.svg";
import { StickySection } from "../../components/StickySection/StickySection";

export const About = () => {
  return (
    <section className="about container">
      <h1 className="visually-hidden">About us</h1>
      <div className="about__wrapper">
        <div className="about__description">
          <WeAre />
          <p>Worldwide company developing software for your devices</p>
          <span>Scroll down</span>
        </div>
        <div className="about__video">
          <div className="about__video-preview">
            <button type="button">
              <Play />
            </button>
          </div>
          <div className="about__video-description">
            <p>Look at our</p>
            <p>
              <span>[</span>showreel<span>] —</span> 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
