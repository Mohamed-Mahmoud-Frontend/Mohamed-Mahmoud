  import "./index.css";
  import { Contact } from "./component/contact/Contact";
  import { Header } from "./component/header/Header";
  import { Hero } from "./component/hero/Hero";
  import { Main } from "./component/main/Main";
  import { Footer } from "./component/footer/Footer";
  import { AiOutlineArrowUp } from "react-icons/ai";
  import { useState, useEffect } from "react";
  import SkillsData from "./component/skills/SkillsData";
  import InfoAbout from "./component/info/InfoAbout";
  import ProductProvider from "./context/ProductContext";
import { BounceLoader } from "react-spinners";
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
            <BounceLoader
              color="hsla(333, 0%, 100%, 1)"
              size={200}
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
            <InfoAbout />
            <div className="divider" />
            <SkillsData />
            <div className="divider" />
            <ProductProvider>
              <Main />
            </ProductProvider>
            <div className="divider" />
            <Contact />
            <div className="divider" />
            <Footer />
            <a
              style={{ opacity: scrollButton ? 1 : 0, transition: ".5s" }}
              href="#up"
            >
              <AiOutlineArrowUp className="icon-fixed" />
            </a>
          </div>
        )}
      </div>
    );
  }

  export default App;
