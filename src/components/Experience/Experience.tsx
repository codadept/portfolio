import { forwardRef } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

import styles from "./Experience.module.scss";

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (
  _props,
  ref
) => {
  return (
    <article ref={ref} className={styles["exp"]}>
      <h1>Experience</h1>
      <ExperienceCard
        company="Oracle"
        endDate={"present"}
        startDate={new Date("January, 2024")}
        position="Project Intern"
        link="https://www.oracle.com/in/corporate/"
        keyPoints={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus. Officiis ",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus. Officiis",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus.",
        ]}
        skills={["Typescript", "Java", "Python"]}
      />
      <ExperienceCard
        company="Amazon"
        endDate={new Date("July, 2023")}
        startDate={new Date("May, 2023")}
        position="Software Development Engineer Intern"
        link="https://www.aboutamazon.in/about-us"
        keyPoints={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus. Officiis ",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus. Officiis",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim id dolores vitae, accusantium necessitatibus libero natus repellendus.",
        ]}
        skills={["Typescript", "Java", "Python"]}
      />
    </article>
  );
};

const ForwardedRefExperience = forwardRef(Experience);

export default ForwardedRefExperience;
