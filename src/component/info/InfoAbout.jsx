import "./InfoAbout.css";
import image from "../hero/img.png";
const InfoAbout = () => {
  return (
    <section id="about">
      <div className="title">

          <h2>About me</h2>



        <p className="subtitle">
          <span>
            <b>Name :</b> Mohamed Mahmoud 
            
            <b>
            <br/>
            <b>Age :</b> 21 
              <br />
              Job title :
            </b>
           
            Front End Developer React
          </span>
          <br />
          I’m a front-end web developer with a strong passion for creating
          visually appealing and user-friendly web applications. I am very
          passionate about improving my coding skills & developing applications
          & websites. I have also gained a solid foundation in HTML5, CSS3,
          JavaScript, Tailwind, Bootstrap, React.js, Next.js, material.ui, GitHub,
          Responsive Web Design Compatibility, Git&GitHub, Teamwork,. I am always eager to
          learn new technologies and techniques to enhance my skillset.
          {/*
          <span>
            <b>Experience :</b> +1 year
          </span>
          <br/>

          <span>
            <b>Summary : </b> me skilled Front End Developer with over 1 year
            of experience in the field. I have strong background in web development
            and me proficient in various front-end technologies and frameworks.
          </span>
          <br/>
          <span> <b>Skills :</b> HTML5 CSS3 JavaScript Tailwind Bootstrap React.js
          Next.js material.ui GitHub Responsive Web Design Compatibility Git
          Teamwork...
        </span>
        <br/>
          <span>
            I passionate about creating user-friendly and visually engaging
            websites that deliver an exceptional user experience.
            <br/>
  </span>*/}
        </p>
      </div>
      <div className="imgAbout">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default InfoAbout;
