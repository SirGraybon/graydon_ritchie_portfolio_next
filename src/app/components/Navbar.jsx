//IMPORTs
import "../styles/Navbar.css";
import Image from "next/image";
// import gitHubLogo from "../public/assets/github-mark.png";
// import linkedInLogo from "../public/assets/linkedin-logo-png-2026.png";
// import emailLogo from "../public/assets/mail-142.png";
// import figmaLogo from "../public/assets/figma.png";

//COMPONENT DEFINITION
function Navbar({ viewSwitcher }) {
  //RETURN STATEMENT
  return (
    <div className="navbar">
      <div className="nav_grouping">
      <div className="name">Graydon Ritchie</div>


      <a className="navigation" href="#about">
        <p className="contactLabel">About</p>
      </a>
      <a className="navigation" href="#skills">
        <p className="contactLabel">Skills</p>
      </a>
      <a className="navigation" href="#projects">
        <p className="contactLabel">Projects</p>
      </a>
      </div>

      <div className="nav_grouping">
        <a
          target="_blank"
          href="https://github.com/SirGraybon"
          className="contactLink"
        >
          <div className="contactGroup">
            <Image className="contactLogo" src="/github-mark.png"  width={25}  height={25} />
            <p className="contactLabel">GitHub</p>
          </div>
          <div>
            <p className="contactLabel"> </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/graydonritchie/"
          className="contactLink"
        >
          <div className="contactGroup">
            <Image className="contactLogo" src="/linkedin-logo-png-2026.png" width={25}  height={25} />
            <p className="contactLabel">LinkedIn</p>
          </div>
          <div>
            <p className="contactLabel"> </p>
          </div>
        </a>
        <a
          target="_blank"
          href="mailto:graydonritchie@gmail.com"
          className="contactLink"
        >
          <div className="contactGroup">
            <Image className="contactLogo" src="/mail-142.png" width={25}  height={25} />
            <p className="contactLabel">Email me</p>
          </div>
          <div>
            <p className="contactLabel"> </p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://flowcv.com/resume/p3iowipl9s"
          className="contactLink"
        >
          <div className="contactGroup">
            <Image className="contactLogo" src="/figma.png" width={25}  height={25} />
            <p className="contactLabel">Resume</p>
          </div>
          <div>
            <p className="contactLabel"> </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
