import styles from "./Navigation.module.scss";

const Navigation: React.FC<{ imgSrc: string; nav: string }> = ({ imgSrc, nav }) => {
  return (
    <nav className={styles["nav"]}>
      {nav}
      <img src={imgSrc} alt={imgSrc} />
    </nav>
  );
};

export default Navigation;
