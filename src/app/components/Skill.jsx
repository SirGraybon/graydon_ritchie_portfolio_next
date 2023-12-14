import "../styles/skills.css"
import Image from "next/image"
const Skill = (props)=> {
  return(
    <div className="skill">
    {props.logo && <Image width={50} height={50} className="skill_logo" src={props.logo} />}
    <p className="skill_label">{props.label}</p>
  </div>
  )
}

export default Skill