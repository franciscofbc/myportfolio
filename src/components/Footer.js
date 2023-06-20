import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        //teste
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2023</p>
    </div>
  );
};
