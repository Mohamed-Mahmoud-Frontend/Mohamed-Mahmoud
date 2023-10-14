import Marquee from "react-fast-marquee";
import './Skills.css'
import Html from "../../../public/assets/html.svg"
import css from "../../../public/assets/css.svg"
import bootstrap from "../../../public/assets/bootstrap.svg"
import tailwind from "../../../public/assets/tailwind.svg"
import javascript from "../../../public/assets/javascript.svg"
import react from "../../../public/assets/react.svg"
import next from "../../../public/assets/nextJS.svg"
import materialui from "../../../public/assets/materialui.svg"
import vitejs from "../../../public/assets/vitejs.svg"
import git from "../../../public/assets/git.svg"


const SkillsData = () => {
  return (
    <div  className="skills" id="skills">
      <h1  style={{ textAlign: "start" }}>skills</h1>
      <div className="skill-image">
              <Marquee
        gradient={false}
        speed={100}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="right"
      >
        <div>
          <img src={Html} alt="" />
        </div>
        <div>
          <img src={css}alt="" />
        </div>
        <div>
          <img src={bootstrap} alt="" />
        </div>

        <div>
          <img src={tailwind} alt="" />
        </div>
        <div>
          <img src={javascript} alt="" />
        </div>
        <div>
          <img src={react} alt="" />
        </div>

        <div>
          <img src={materialui} alt="" />
        </div>
        <div>
          <img src={next} alt="" />
        </div>
        <div>
        <img src={vitejs} alt="" />
        </div>
        <div>
          <img src={git} alt="" />
        </div>
      </Marquee>
      </div>

    </div>
  );
};

export default SkillsData;
