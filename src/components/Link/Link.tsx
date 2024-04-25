import { ReactNode } from "react";

import styles from "./Link.module.scss";

type Props = {
  to?: string;
  children?: ReactNode;
};

const Link: React.FC<Props> = ({ to = "/", children = <></> }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className={styles["link"]}>
      {children}
    </a>
  );
};

export default Link;
