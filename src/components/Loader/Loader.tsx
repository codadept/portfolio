import styles from "./Loader.module.scss";

import { Link } from "../../components";

const Loader: React.FC = () => {
  return (
    <article className={styles["parent-loader"]}>
      <div className={styles["loader"]}></div>
      <p>
        The loader was taken from{" "}
        <Link to="https://css-loaders.com/dots/">CSS Loaders</Link>
      </p>
    </article>
  );
};

export default Loader;
