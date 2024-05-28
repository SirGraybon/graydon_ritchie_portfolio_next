import "../styles/about.css";
import Image from "next/image";
// import avatar from "../../public/assets/avatar.jpg";

const About = () => {
  return (
    <div id="about">
         <div className="header">About me </div>

      <div className="about">
        <div className="spotlight">
          <Image src="/avatar.jpg" alt="A picture of Graydon Ritchie" className="avatar"  width={300}  height={300} />

          <div className="about_box">
            <div className="about_segment">
            Versatile Frontend developer with experience in React/NextJS, Angular, TypeScript, and Node.js, with a focus on strong problem-solving and analytical thinking that promotes efficient project cooperation.
            </div>
          </div>
        </div>
        <div className="about_box_full">
          <div className="about_segment">
          Starting my career in Human Resources, my passion for technology led to a major shift in my professional journey. Driven by curiosity and a desire to make a meaningful impact in the digital world, I made the transition to become a front-end developer.
          </div>
          <div className="about_segment">
          My background gives me a unique perspective. A valuable combination of technical skills and an understanding of human dynamics, helping me to create user-centric solutions that end-users on a personal level.
          </div>
          <div className="about_segment">
          As a developer, I find joy in crafting seamless front-end interfaces that captivate users. I embrace the dynamic nature of the tech industry, and continuously seek new challenges and stay up-to-date with the latest advancements to deliver cutting-edge solutions.
          </div>
          <div className="about_segment">
            Lets build something extraordinary together!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
