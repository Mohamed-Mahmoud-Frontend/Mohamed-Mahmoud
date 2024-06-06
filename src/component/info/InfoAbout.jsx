import "./InfoAbout.css";
import image from "../hero/img.png";
const InfoAbout = () => {
  return (
    <section id="about">
      <div className="title">

          <h2>About me</h2>

        <p className="subtitle">
       
        
          My name is Mohamed Mahmoud, and I am a Front End Developer specializing in React. With a strong passion for creating visually appealing and user-friendly web applications, I am dedicated to delivering high-quality digital experiences.

As a Front End Developer, I am committed to continuous learning and improvement in my coding skills. My expertise includes HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, React.js, Next.js, Material-UI, and Git/GitHub. I am proficient in Responsive Web Design and have experience working collaboratively in team environments.
         
        </p>
      </div>
      <div className="imgAbout">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default InfoAbout;
