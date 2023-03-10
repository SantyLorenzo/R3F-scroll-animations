import "./WhatWeDoAreas.scss";

import { ReactComponent as Design } from "../../assets/images/icon/what-we-do/design.svg";
import { ReactComponent as DigitalTransformation } from "../../assets/images/icon/what-we-do/digital-transformation.svg";
import { ReactComponent as DiscoveryPhase } from "../../assets/images/icon/what-we-do/discovery-phase.svg";
import { ReactComponent as QATesting } from "../../assets/images/icon/what-we-do/qa-testing.svg";
import { ReactComponent as StaffAugmentation } from "../../assets/images/icon/what-we-do/staff-augmentation.svg";
import { ReactComponent as WearableDevices } from "../../assets/images/icon/what-we-do/wearable-devices.svg";
import { StickySection } from "../../components/StickySection/StickySection";
import { useModalStore } from "../../store/modal";

export const WhatWeDoAreas = () => {
  const setWhatWeDoVisible = useModalStore((state) => state.setWhatWeDoVisible);

  return (
    <StickySection
      className="what-we-do-areas"
      wrapperClassName="what-we-do-areas-wrapper"
    >
      <div className="what-we-do__areas">
        <ul className="what-we-do__areas-list what-we-do__areas-list--left">
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <DigitalTransformation />
            </div>
            <p>Digital Transformation</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <WearableDevices />
            </div>
            <p>Wearable devices</p>
          </li>
        </ul>
        <ul className="what-we-do__areas-list what-we-do__areas-list--center">
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <DiscoveryPhase />
            </div>
            <p>Discovery phase</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <StaffAugmentation />
            </div>
            <p>Staff augmentation</p>
          </li>
        </ul>
        <ul className="what-we-do__areas-list what-we-do__areas-list--right">
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <Design />
            </div>
            <p>Design</p>
          </li>
          <li className="what-we-do__areas-item">
            <button onClick={() => setWhatWeDoVisible(true)}></button>
            <div>
              <QATesting />
            </div>
            <p>Quality Assurance &&nbsp;Testing</p>
          </li>
        </ul>
      </div>
    </StickySection>
  );
};
