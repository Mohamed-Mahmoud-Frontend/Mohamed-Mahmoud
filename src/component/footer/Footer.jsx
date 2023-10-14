import './Footer.css'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer  className='footer'>    
    <div style={{marginBottom:"2rem"}}  className="icons-footer">
    <a href="https://www.linkedin.com/in/mohamed-mahmoud-8b1538254/"><BsLinkedin   className="icon"/></a>
    <a href="https://github.com/Mohamed-Mahmoud-Frontend">  <BsGithub  className="icon"/></a>
    <a href="https://www.facebook.com/profile.php?id=100012385380960"> <BsFacebook  className="icon"/></a>
    <a href="https://www.instagram.com/hamasa.11/">  <BsInstagram  className="icon"/></a>
    

    </div>
    <div>
    <p>© 2023 <a href="https://www.linkedin.com/in/mohamed-mahmoud-8b1538254/">Mohamed Mahomud</a>. All rights reserved.</p>
    </div>
    </footer>
  )
}
