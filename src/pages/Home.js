import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Home.css';

export const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name Is Francisco</h2>
        <div className="prompt">
          <p>A full stack developer in learning</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h1>Front-End</h1>
            <span>HTML, CSS, ReactJS, Redux, StyledComponents</span>
          </li>
          <li className="item">
            <h1>Back-End</h1>
            <span></span>
          </li>
          <li className="item">
            <h1>Languages</h1>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
