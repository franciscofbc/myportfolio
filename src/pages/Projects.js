import { ProjectItem } from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal projects</h1>
      <div className="projectList">
        {projectList.map(({ name, image }, index) => (
          <ProjectItem id={index} image={image} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
