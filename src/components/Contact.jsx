import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(["contact"]);

  return (
  <>
  <div id="contact">
    <a href="mailto:jasminezeng08@gmail.com" id="email-me">
      <EmailIcon id="icons" />
    </a> 
    <a href="https://www.linkedin.com/in/jasminzeng/" target="_blank">
      <LinkedInIcon id="icons" />
    </a>
    <a href="https://github.com/Jasmineprogrammiert" target="_blank">
      <GitHubIcon id="icons" />
    </a>
    <footer>
      <small>
        {t("contact")}
      </small>
    </footer>
    <a href="#top">
      <KeyboardDoubleArrowUpIcon id="icon" />
    </a>
  </div>
  </>
  )
}

export default Contact;