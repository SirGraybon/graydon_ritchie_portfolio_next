import "../styles/footer.css";
import gitHubLogo from "/public/github-mark.png";
import linkedInLogo from "/public/linkedin-logo-png-2026.png";
import emailLogo from "/public/mail-142.png";
import figmaLogo from "/public/figma.png";
import Image from "next/image";


const Footer =() => {
  return(
    <div className="footer_nav_grouping">
    <a
      target="_blank"
      href="https://github.com/SirGraybon"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <Image width={25}  height={25} className="footer_contactLogo" src={gitHubLogo} />
        <p className="footer_contactLabel">GitHub</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/graydonritchie/"
      className="contactLink"
    >
      <div className="footer_contactGroup">
        <Image width={25}  height={25} className="footer_contactLogo" src={linkedInLogo} />
        <p className="footer_contactLabel">LinkedIn</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="mailto:graydonritchie@gmail.com"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <Image width={25}  height={25}className="footer_contactLogo" src={emailLogo} />
        <p className="footer_contactLabel">Email me</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
    <a
      target="_blank"
      href="https://flowcv.com/resume/p3iowipl9s"
      className="footer_contactLink"
    >
      <div className="footer_contactGroup">
        <Image width={25}  height={25} className="footer_contactLogo" src={figmaLogo} />
        <p className="footer_contactLabel">Resume</p>
      </div>
      <div>
        <p className="footer_contactLabel"> </p>
      </div>
    </a>
  </div>
  )
}

export default Footer