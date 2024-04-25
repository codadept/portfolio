import styles from "./ProjectCard.module.scss";

type Props = {
  imageSrc: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
};

const ProjectCard: React.FC<Props> = ({
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
