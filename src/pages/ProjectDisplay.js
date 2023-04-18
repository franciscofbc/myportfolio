import GitHubIcon from '@material-ui/icons/GitHub';

import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';

import '../styles/ProjectDisplay.css';

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
};
