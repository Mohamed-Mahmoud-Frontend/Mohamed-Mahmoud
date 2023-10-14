import "./About.css";
import image from "../../../public/img.png"
const About = () => {
  return (
    <section id="about" >

    <div>
            <h2>Info about me</h2>
      <p className="subtitle">
        Name: Mohamed  Role: Front End Developer Experience: +1 year
        Summary: I a skilled Front End Developer with over 1 year of experience
        in the field. I a strong background in web development and is proficient
        in various front-end technologies and frameworks. I passionate about
        creating user-friendly and visually engaging websites that deliver an
        exceptional user experience. Skills: HTML5 CSS3 JavaScript Tailwind
        Bootstrap React.js Next.js material.ui GitHub Responsive Web Design Cross-Browser
        Compatibility Version Control Git Teamwork
      </p>
    </div>
    <div>
    <img style={{width:"400px"}} src={image}alt=""/>
    </div>

    </section>
  );
};

export default About;
