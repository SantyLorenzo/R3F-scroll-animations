import styles from './stickySection.module.scss'

import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  wrapperClassName?: string;
}

export const StickySection = ({
  children,
  className = "",
  wrapperClassName = "",
}: Props) => {
  return (
    <section className={wrapperClassName}>
      <div className={`${styles.stickySection} ${className}`}>{children}</div>
    </section>
  );
};
