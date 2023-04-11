import styles from './stickySection.module.scss'

import { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
  wrapperClassName?: string;
}

export const StickySection = ({
  id = '',
  children,
  className = "",
  wrapperClassName = "",
}: Props) => {
  return (
    <section id={id} className={wrapperClassName}>
      <div className={`${styles.stickySection} ${className}`}>{children}</div>
    </section>
  );
};
