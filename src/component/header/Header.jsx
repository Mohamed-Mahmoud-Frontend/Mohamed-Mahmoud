import { useEffect, useState } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export const Header = () => {
  const [showData, setShowData] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("valueTheme") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.add("dark");
      document.body.classList.remove("light");

    }
  }, [theme]);
  return (
    <header className="flex header-section" id="Header">
      <h1 className="find"></h1>

      <button
        onClick={() => {
          setShowData(true);
        }}
        className="menu "
      >
        <FiMenu className="FiMenu" />
      </button>

      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "valueTheme",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("valueTheme"));
        }}
        className="mode"
      >
      { theme === "dark" ? <BsFillMoonFill className="moonFill"/>  :<BsFillSunFill className="sunFill" /> }
        
      </button>

      {showData && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="close"
                onClick={() => {
                  setShowData(false);
                }}
              >
                {" "}
                <AiOutlineClose className="close" />
              </button>
            </li>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
