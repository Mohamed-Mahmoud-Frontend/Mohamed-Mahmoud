import { useState } from "react";
import "./Main.css";
import { BsArrowRightShort, BsGithub, BsLink45Deg } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
export const Main = () => {
  const [active, setActive] = useState("all");
  const allProject = useContext(ProductContext);
  const [arr, setArr] = useState(allProject);
  return (
    <main className="mainProject" id="project">
      <div className="l-section ">
        <button
          onClick={() => {
            setActive(allProject);

            const newArr = allProject.filter((item) => {
              return item.category2 === "all" ;
            });
            setArr(newArr);

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

        <button
        onClick={() => {
          const newArr = allProject.filter((item) => {
            return item.category === "FreeLancer";
          });
          setArr(newArr);
          setActive("FreeLancer");
        }}
        className={active === "FreeLancer" ? "active" : null}
        type=""
      >
        freelancer
      </button>
      </div>

      <section className="r-section ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                key={item.image}
                className="card"
              >
                <img src={item.image} alt="" />

                <div className="box">
                  <h1 className="title-card">{item.title}</h1>
                  <p className="subtitle">{item.subTitle}</p>

                  <div className="icon-card flex">

                    <div className="flex link">
                      <a href={item.link}>
                      View Demo
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