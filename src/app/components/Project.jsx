import "../styles/Project.css";
import gitHubLogo from "/public/github-mark.png";
import Image from "next/image";

function Project(props) {
  const { projectTitle, gif, projectDescription, url } = props;

  return (
    <a className="project" target="_blank" href={url}>
      <Image height={280} width={470} className="gif" src={gif} />
      <div className="coverTitle">
        <div className="innerCover">
          <h3 className="title">{projectTitle}</h3>
          <Image height={25} width={25} className="contactLogo" src={gitHubLogo} />
        </div>
        <p>{projectDescription}</p>
      </div>
    </a>
  );
}

export default Project;
