import { useState } from "react";
import "./Main.css";
import { BsArrowRightShort, BsGithub, BsLink45Deg } from "react-icons/bs";
// import {allProject} from "./Project.js"
import { AnimatePresence, motion } from "framer-motion";
const allProject = [
  {
    title: "E-commerce Amazon Clone",
    category: "react",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKsw0wE25AxZPm4f8P9bzRl5IKY9AvjaABg&usqp=CAU",
    subTitle:
      "The Amazon Clone project is a comprehensive e-commerce solution built using ReactJS.",
    link: "https://amazonn-clone-sigma.vercel.app/", 
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"
  },
  {
    title: "website Gim fit",
    category: "react",
    image: "https://screenshots.codesandbox.io/jkqx3t/515.png",
    subTitle:
      "The website Gim fit project is a comprehensive Gim fit solution built using ReactJS.",
    link: "https://fit-club-lilac.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"
  },

  {
    title: "website Restaurant",
    category: "react",
    image:
      "https://mostaql.hsoubcdn.com/uploads/portfolios/873441/63c87a02398a4/Screenshot-2023-01-19-004457.png",
    subTitle:
      "The website Restaurant project is a comprehensive  Restaurant solution built using ReactJS.",
    link: "https://restrant-frontend-react.vercel.app/",
    
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"
  },
  {
    title: "website portfolio react",
    category: "react",
    image: "/629a744633cf80efdf426182_NewSongChurch-ShilohCreative-p-1080.jpeg",
    subTitle:
      "The Amazon Clone project is a comprehensive e-commerce solution built using ReactJS.",
    link: "https://portfolio-react-mu-six.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"

  },
  {
    title: "website watch by bootstrap ",
    category: "css",
    image: "/bandicam 2023-10-13 17-37-06-818.jpg",
    subTitle:
      " website watch project is a comprehensive website watch solution built using bootstrap css.",
    link: "https://website-bootstrap-watch.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"

  },

  {
    title: "website audi cars by bootstrap ",
    category: "css",
    image: "/audi.jpg",
    subTitle:
      "website cars project is a comprehensive website cars solution built using bootstrap css.",
    link: "https://audi-cars.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"

  },
  {
    title: "website iphone by js ",
    category: "javascript",
    image:
      "https://i.pinimg.com/236x/ef/51/e4/ef51e4fb7fd49e58c5c7a1505c831d7b.jpg",
    subTitle:
      "The website iphone project is a comprehensive website iphone solution built using javascript .",
    link: "https://make-a-creative-landing-page-using-html-css-js.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"

  },
  {
    title: "project html&css ",
    category: "css",
    image: "/2.jpg",
    subTitle:
      " website html&css project is a comprehensive website html&css solution built using html&css .",
    link: "https://frontend-project-tau.vercel.app/",
    gitHub :"https://github.com/Mohamed-Mahmoud-Frontend"

  },
];
export const Main = () => {
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(allProject);
  return (
    <main className="mainProject" id="project">
      <div className="l-section ">
        <button
          onClick={() => {
            setActive("all");
            setArr(allProject);
          }}
          className={active === "all" ? "active" : null}
        >
          all project
        </button>
        <button
          onClick={() => {
            setActive("css");
            const newArr = allProject.filter((item) => {
              return item.category === "css";
            });
            setArr(newArr);
          }}
          className={active === "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => {
            const newArr = allProject.filter((item) => {
              return item.category === "javascript";
            });
            setArr(newArr);
            setActive("javascript");
          }}
          className={active === "javascript" ? "active" : null}
          type=""
        >
          javascript
        </button>
        <button
          onClick={() => {
            const newArr = allProject.filter((item) => {
              return item.category === "react";
            });
            setArr(newArr);
            setActive("react");
          }}
          className={active === "react" ? "active" : null}
          type=""
        >
          react & mui
        </button>
      </div>

      <section className="r-section flex">
      <AnimatePresence>
          
      {arr.map((item) => {
          return (
              <motion.article 
              
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: .4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              
              
              key={item.image} className="card">
                <img src={item.image} alt="" />

                <div className="box">
                  <h1 className="title-card">{item.title}</h1>
                  <p className="subtitle">{item.subTitle}</p>

                  <div className="icon-card flex">
                    <div style={{ gap: "11px" }} className="flex">
                    <a href={item.gitHub}><BsLink45Deg/></a>
                      <a href={item.gitHub}> <BsGithub /></a>
                      
                    </div>
                    <div className="flex link">
                      <a href={item.link}>
                        More
                        <BsArrowRightShort style={{ alignSelf: "end" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
          );
        })}
        </AnimatePresence>

      </section>
    </main>
  );
};
