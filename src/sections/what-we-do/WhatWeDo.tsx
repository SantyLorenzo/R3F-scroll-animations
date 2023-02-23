import "./WhatWeDo.scss";

import { dispatch } from "use-bus";

import { ReactComponent as Design } from "../../assets/images/icon/what-we-do/design.svg";
import { ReactComponent as DigitalTransformation } from "../../assets/images/icon/what-we-do/digital-transformation.svg";
import { ReactComponent as DiscoveryPhase } from "../../assets/images/icon/what-we-do/discovery-phase.svg";
import { ReactComponent as QATesting } from "../../assets/images/icon/what-we-do/qa-testing.svg";
import { ReactComponent as StaffAugmentation } from "../../assets/images/icon/what-we-do/staff-augmentation.svg";
import { ReactComponent as WearableDevices } from "../../assets/images/icon/what-we-do/wearable-devices.svg";
import { ReactComponent as WhatWeDoSvg } from "../../assets/images/text/what-we-do.svg";

// const areasList = [
//   {
//     icon: <DigitalTransformation />,
//     title: "Digital Transformation",
//   },
//   {
//     icon: <DiscoveryPhase />,
//     title: "Discovery Phase",
//   },
//   {
//     icon: <Design />,
//     title: "Design",
//   },
//   {
//     icon: <WearableDevices />,
//     title: "WEARABLE DEVICES",
//   },
//   {
//     icon: <StaffAugmentation />,
//     title: "Staff Augmentation",
//   },
//   {
//     icon: <QATesting />,
//     title: "Quality Assurance & Testing",
//   },
// ];

export const WhatWeDo = () => {
  return (
    <section className="what-we-do container">
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
      <div className="what-we-do__areas">
        <ul className="what-we-do__areas-list what-we-do__areas-list--left">
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <DigitalTransformation />
            </div>
            <p>Digital Transformation</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <WearableDevices />
            </div>
            <p>Wearable devices</p>
          </li>
        </ul>
        <ul className="what-we-do__areas-list what-we-do__areas-list--center">
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <DiscoveryPhase />
            </div>
            <p>Discovery phase</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <StaffAugmentation />
            </div>
            <p>Staff augmentation</p>
          </li>
        </ul>
        <ul className="what-we-do__areas-list what-we-do__areas-list--right">
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <Design />
            </div>
            <p>Design</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => dispatch("WHAT_WE_DO_OPEN")}></button>
            <div>
              <QATesting />
            </div>
            <p>Quality Assurance &&nbsp;Testing</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
