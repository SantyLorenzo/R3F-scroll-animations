import "./Modal.scss";

import Modal from "react-modal";
import { dispatch } from "use-bus";

import { ReactComponent as Arrow } from "../../assets/images/icon/button/arrow.svg";
import { ReactComponent as Close } from "../../assets/images/icon/button/close.svg";
import { ReactComponent as Plus } from "../../assets/images/icon/decor/plus.svg";

Modal.setAppElement("#root");

export const ModalWhatWeDo = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch("WHAT_WE_DO_CLOSE")}
      className="modal modal-what-we-do"
      overlayClassName="modal-overlay"
      bodyOpenClassName="modal-open"
    >
      <div className="modal-what-we-do__wrapper">
        <button
          className="modal-what-we-do__close"
          type="button"
          onClick={() => dispatch("WHAT_WE_DO_CLOSE")}
        >
          <Close />
        </button>
        <div className="modal-what-we-do__img"></div>
        <div className="modal-what-we-do__inner">
          <h2>
            WEARABLE DEVICES <Plus />
          </h2>
          <p>We Develop Great Soft for Wearables</p>
          <a href="#!">
            Go Over <Arrow />
          </a>
        </div>
      </div>
    </Modal>
  );
};
