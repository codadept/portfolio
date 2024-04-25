import { forwardRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../assets/projects.json";

import styles from "./Project.module.scss";

const Project: React.ForwardRefRenderFunction<HTMLDivElement> = (
  _props,
  ref
) => {
  return (
    <article ref={ref} className={styles["project"]}>
      <h1>Projects</h1>
      {projects.map((p, idx) => (
        <ProjectCard
          description={p.description}
          imageSrc={p.imageSrc}
          link={p.link}
          name={p.name}
          skills={p.skills}
          key={idx}
        />
      ))}
    </article>
  );
};

const ForwardedRefProject = forwardRef(Project);

export default ForwardedRefProject;
