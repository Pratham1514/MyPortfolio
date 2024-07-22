import styles from "./ProjectsStyles.module.css";
import brainwave from "../../assets/background1.jpg";
import MoneyTracker from "../../assets/money-tracker1.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={brainwave}
          link="https://github.com/Pratham1514/BrainwaveAI"
          h3="Brainwave AI"
          p="Landing page"
        />
        <ProjectCard
          src={MoneyTracker}
          link="https://github.com/Pratham1514/money-tracker"
          h3="Money Tracker"
          p="Money Tracker App"
        />
      </div>
    </section>
  );
};

export default Projects;
