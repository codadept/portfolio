import { forwardRef } from "react";

import styles from "./About.module.scss";

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  return (
    <article ref={ref} className={styles["about"]}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id
        dolores vitae, accusantium necessitatibus libero natus repellendus.
        Officiis voluptate illo architecto ad nulla perferendis unde fugiat
        voluptatum ipsam consectetur maxime pariatur non hic voluptates dolorum
        amet beatae minima omnis temporibus est, culpa ab, facere ut? Harum
        nihil autem iure dicta!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        molestiae illo non nobis quaerat optio voluptate reprehenderit nihil
        odio officia.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id
        dolores vitae, accusantium necessitatibus libero natus repellendus.
        Officiis voluptate illo architecto ad nulla perferendis unde fugiat
        voluptatum ipsam consectetur maxime pariatur non hic voluptates dolorum
        amet beatae minima omnis temporibus est, culpa ab, facere ut? Harum
        nihil autem iure dicta!
      </p>
    </article>
  );
};

const ForwardedRefAbout = forwardRef(About);

export default ForwardedRefAbout;
