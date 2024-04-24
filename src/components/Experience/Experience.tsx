import { forwardRef } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

import experiences from "../../assets/experience.json";

import styles from "./Experience.module.scss";

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (
  _props,
  ref
) => {
  return (
    <article ref={ref} className={styles["exp"]}>
      <h1>Experience</h1>
      {experiences.map((e, idx) => (
        <ExperienceCard
          company={e.company}
          endDate={e.endDate === "present" ? "present" : new Date(e.endDate)}
          startDate={new Date(e.startDate)}
          position={e.position}
          link={e.link}
          keyPoints={e.keyPoints}
          skills={e.skills}
          key={idx}
        />
      ))}
    </article>
  );
};

const ForwardedRefExperience = forwardRef(Experience);

export default ForwardedRefExperience;
