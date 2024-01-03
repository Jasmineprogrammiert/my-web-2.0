import { useTranslation } from 'react-i18next';
// styles
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BackToTopp from './BackToTop';

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
  <>
  <div id="contact">
    <a href="mailto:jasminezeng08@gmail.com" id="email-me">
      <EmailIcon id="icons" />
    </a> 
    <a href="https://www.linkedin.com/in/jasminzeng" target="_blank" rel="noreferrer">
      <LinkedInIcon id="icons" />
    </a>
    <a href="https://github.com/Jasmineprogrammiert" target="_blank" rel="noreferrer">
      <GitHubIcon id="icons" />
    </a>
    <footer>
      <small>
        {t("contact")}
      </small>
    </footer>
  </div>
  <BackToTopp />
  </>
  )
}

export default Contact;