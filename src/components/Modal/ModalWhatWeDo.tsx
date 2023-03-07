import "./Modal.scss";

import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import { cloneElement, FC, useEffect } from "react";
import { Modal } from "react-overlays";
import { Transition } from "react-transition-group";

import { ReactComponent as Arrow } from "../../assets/images/icon/button/arrow.svg";
import { ReactComponent as Close } from "../../assets/images/icon/button/close.svg";
import { ReactComponent as Plus } from "../../assets/images/icon/decor/plus.svg";
import { useModalStore } from "../../store/modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Fade: FC<any> = ({ children, ...props }) => (
  <Transition {...props} timeout={{ appear: 0, enter: 300, exit: 300 }}>
    {(state) =>
      cloneElement(children, {
        className: clsx(
          children.props.className,
          state === "entered" && "visible"
        ),
      })
    }
  </Transition>
);

export const ModalWhatWeDo = () => {
  const isWhatWeDoVisible = useModalStore((state) => state.isWhatWeDoVisible);
  const setWhatWeDoVisible = useModalStore((state) => state.setWhatWeDoVisible);

  useEffect(() => {
    const listener = (e: Event) => e.preventDefault();
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("wheel", listener);
  }, []);

  useLenis(
    (lenis: any) => (lenis.isLocked = isWhatWeDoVisible),
    [isWhatWeDoVisible]
  );

  return (
    <>
      <Modal
        renderBackdrop={(props) => <div {...props} className="modal-overlay" />}
        backdropTransition={Fade}
        transition={Fade}
        handleContainerOverflow={false}
        onHide={() => setWhatWeDoVisible(false)}
        show={isWhatWeDoVisible}
        className="modal modal-what-we-do"
      >
        <>
          <button
            className="modal-what-we-do__close"
            type="button"
            onClick={() => setWhatWeDoVisible(false)}
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
        </>
      </Modal>
    </>
  );
};
