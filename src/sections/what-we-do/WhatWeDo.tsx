import "./WhatWeDo.scss";

import { ReactComponent as WhatWeDoSvg } from "../../assets/images/text/what-we-do.svg";
import { StickySection } from "../../components/StickySection/StickySection";

export const WhatWeDo = () => {
  return (
    <StickySection wrapperClassName="what-we-do container">
      <h2 className="visually-hidden">What we do</h2>
      <div className="what-we-do__wrapper">
        <div className="what-we-do__title">
          <WhatWeDoSvg />
          <div>
            <span>01</span>
            <span>/</span>
          </div>
        </div>
        <div className="what-we-do__description">
          <p>Digital developing</p>
          <p>
            We specialize in <span>6+</span> areas
          </p>
        </div>
      </div>
    </StickySection>
  );
};
