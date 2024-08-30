import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/tristonpalacios" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="coloredIcon" />
      </a>
      <a href="https://github.com/tristonpalacios" target="_blank" rel="noopener noreferrer">
        <FaGithub className="coloredIcon" />
      </a>
      <a href="https://www.instagram.com/tristonjpalacios/?hl=en" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="coloredIcon" />
      </a>
    </div>
  );
};

export default Socials;
