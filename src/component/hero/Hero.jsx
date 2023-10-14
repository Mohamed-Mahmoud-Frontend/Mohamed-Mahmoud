import Typewriter from "typewriter-effect";
import "./Hero.css";
import { MdVerified } from "react-icons/md";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Lottie from "lottie-react";
import lap from "../../assets/animation/lap.json";
import image from './img.png'
export const Hero = () => {
  return (
    <section className="hero sectionHero" id="hero">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src={image} alt="" />
          <div className="name">
          <span>My name is :</span>
          <h1> Mohamed Mahmoud</h1>
          
          </div>

          <div>
            <MdVerified className="verified" />
          </div>
        </div>
        <h1 className="title">
          <Typewriter
            options={{
              strings: [
                "React Js Developer",
                "UI Developer",
                "Front End Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </h1>

{  /* <p className="subtitle">
         My name is Mohamed Mahmoud, and I am Front-end Developer
           specializing in React. With a passion for creating user-friendly and
        visually appealing web applications, I have honed my skills in
        front-end development to deliver high-quality and efficient solutions.  
          </p>*/}
        <div className="icons">
          <a href="https://www.linkedin.com/in/mohamed-mahmoud-8b1538254/">
            <BsLinkedin className="icon" />
          </a>
          <a href="https://github.com/Mohamed-Mahmoud-Frontend">

            <BsGithub className="icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100012385380960">

            <BsFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/hamasa.11/">

            <BsInstagram className="icon" />
          </a>
        </div>
        <div className="btnCv " style={{marginTop:"2rem"}}>
          <button
            className="Link-cv"
          >
            <a href="https://drive.google.com/file/d/1yYXi2E0O4yJzJbuutXAcFfYzEJRr8gaR/view">Download CV</a>
          </button>
        </div>
      </div>
      <div className="right-section animation-1 ">
        <Lottie
          className="imgAnimation"
          
          animationData={lap}
        />
      </div>
    </section>
  );
};
