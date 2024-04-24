import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Project.module.scss";

const Project: React.FC = () => {
  return (
    <article className={styles["project"]}>
      <h1>Projects</h1>
      <ProjectCard
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ducimus odit fugit aut, repellendus excepturi inventore reiciendis cupiditate mollitia at, magnam velit laborum beatae animi possimus architecto iusto maxime debitis sint aspernatur quam accusamus. Animi laboriosam eaque voluptas facere culpa? Illo fugiat vitae cumque vel voluptatum fuga delectus quos obcaecati."
        imageSrc="/images/self.jpg"
        link="https://www.github.com/codadept"
        name="Project 1"
        skills={["Typescript", "Git", "Python"]}
      />
      <ProjectCard
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ducimus odit fugit aut, repellendus excepturi inventore reiciendis cupiditate mollitia at, magnam velit laborum beatae animi possimus architecto iusto maxime debitis sint aspernatur quam accusamus. Animi laboriosam eaque voluptas facere culpa? Illo fugiat vitae cumque vel voluptatum fuga delectus quos obcaecati."
        imageSrc="/images/self.jpg"
        link="https://www.github.com/codadept"
        name="Project 2"
        skills={["Typescript", "Git", "Python"]}
      />
      <ProjectCard
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ducimus odit fugit aut, repellendus excepturi inventore reiciendis cupiditate mollitia at, magnam velit laborum beatae animi possimus architecto iusto maxime debitis sint aspernatur quam accusamus. Animi laboriosam eaque voluptas facere culpa? Illo fugiat vitae cumque vel voluptatum fuga delectus quos obcaecati."
        imageSrc="/images/self.jpg"
        link="https://www.github.com/codadept"
        name="Project 3"
        skills={[
          "Typescript",
          "Git",
          "Python",
          "Typescript",
          "Git",
          "Python",
          "Typescript",
          "Git",
          "Python",
          "Typescript",
          "Git",
          "Python",
        ]}
      />
      <ProjectCard
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ducimus odit fugit aut, repellendus excepturi inventore reiciendis cupiditate mollitia at, magnam velit laborum beatae animi possimus architecto iusto maxime debitis sint aspernatur quam accusamus. Animi laboriosam eaque voluptas facere culpa? Illo fugiat vitae cumque vel voluptatum fuga delectus quos obcaecati."
        imageSrc="/images/self.jpg"
        link="https://www.github.com/codadept"
        name="Project 4"
        skills={["Typescript", "Git", "Python"]}
      />
    </article>
  );
};

export default Project;
