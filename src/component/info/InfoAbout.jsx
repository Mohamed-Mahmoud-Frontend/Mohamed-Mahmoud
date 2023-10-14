import "./InfoAbout.css";
import image from "../hero/img.png";
const InfoAbout = () => {
  return (
    <section id="about">
      <div>
        <h2>Info about me</h2>
        <p className="subtitle">
          <span>Name: Mohamed Mahmoud Role: Front End Developer</span>
          <span> Experience: +1 year </span>
          <span>
            <b>Summary:</b> I a skilled Front End Developer with over 1 year of
            experience in the field. I a strong background in web development
            and is proficient in various front-end technologies and frameworks.
          </span>
          <span>
            I passionate about creating user-friendly and visually engaging
            websites that deliver an exceptional user experience. Skills: HTML5
            CSS3 JavaScript Tailwind Bootstrap React.js Next.js material.ui
            GitHub Responsive Web Design Compatibility Git Teamwork
          </span>
        </p>
      </div>
      <div className="imgAbout">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default InfoAbout;
