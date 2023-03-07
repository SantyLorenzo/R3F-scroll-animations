import { useProgress } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { Transition } from "react-transition-group";

import { useLockScroll } from "../../hooks/useLockScroll";
import { ReactComponent as Animation } from "./loader.svg";
import classes from "./styles.module.scss";

export const Loader = () => {
  const { active } = useProgress();
  const [animationDone, setAnimationDone] = useState(false);
  const show = useMemo(() => !animationDone || active, [animationDone, active]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationDone(true), 5 * 1000);
    return () => clearTimeout(timeout);
  }, []);

  useLockScroll(show);

  return (
    <Transition in={show} timeout={{ appear: 0, enter: 0, exit: 300 }}>
      {(state) =>
        state !== "exited" && (
          <div
            className={classes.loader}
            style={{ opacity: state === "exiting" ? 0 : 1 }}
          >
            <Animation />
          </div>
        )
      }
    </Transition>
  );
};
