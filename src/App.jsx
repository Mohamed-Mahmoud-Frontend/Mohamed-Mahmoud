import { Contact } from "./component/contact/Contact";
import { Header } from "./component/header/Header";
import { Hero } from "./component/hero/Hero";
import { Main } from "./component/main/Main";
import { Footer } from "./component/footer/Footer";
import "./index.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import SkillsData from "./component/skills/SkillsData";
import About from "./component/about/About";

function App() {
  const [loading, setLoading] = useState(false);
  const [scrollButton, setScrollButton] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  });

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <ScaleLoader
            color="#fff"
            cssOverride={{}}
            height={100}
            loading
            margin={6}
            width={10}
          />
        </div>
      ) : (
        <div className="container" id="up">
          <Header />
          <Hero />
          <div className="divider" />
            <About />
          <div className="divider" />
          <SkillsData />
          <div className="divider" />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />

          <a
            style={{ opacity: scrollButton ? 1 : 0, transition: ".5s" }}
            href="#up"
          >
            <button>
              <AiOutlineArrowUp className="icon-fixed" />
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
