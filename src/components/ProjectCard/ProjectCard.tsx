import { IProject } from "../../global/interfaces";
import styles from "./ProjectCard.module.scss";

const ProjectCard: React.FC<IProject.Project> = ({
  description,
  imageSrc,
  name,
  skills,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles["project-card"]}
    >
      <div className={styles["left"]}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className={styles["right"]}>
        <p className={styles["project-name"]}>{name} &#8599;</p>
        <div className={styles["project-desc"]}>{description}</div>
        <div className={styles["project-skills"]}>
          {skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
