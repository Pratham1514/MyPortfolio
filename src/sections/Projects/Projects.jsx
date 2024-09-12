import styles from "./ProjectsStyles.module.css";
import brainwave from "../../assets/background1.jpg";
import MoneyTracker from "../../assets/money-tracker1.png";
import ProjectCard from "../../common/ProjectCard";
import fileShare from "../../assets/icons8-file-share-96.png";
import weather from "../../assets/icons8-storm-96.png";
import todo from "../../assets/todo.png";
import blog from '../../assets/blog.png'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={brainwave}
          link="https://github.com/Pratham1514/BrainwaveAI"
          h3="Brainwave AI"
          p="Landing page for AI"
        />
        <ProjectCard
          src={MoneyTracker}
          link="https://github.com/Pratham1514/money-tracker"
          h3="Money Tracker"
          p="Money Tracker App"
        />
        <ProjectCard
          src={fileShare}
          link="https://github.com/Pratham1514/ShareLink-file-sharing"
          h3="File Sharing App"
          p="Simple app to share files"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/Pratham1514/SkySage---Weather-app"
          h3="Weather App"
          p="Weather app for weather info"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/Pratham1514/CodeAlpha_ToDoApp"
          h3="ToDo App"
          p="ToDo app to list tasks"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/Pratham1514/BlogApp-Task-2"
          h3="Blog App"
          p="Blog app to create, read, update, and delete blogs"
        />
      </div>
    </section>
  );
};

export default Projects;
