import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "E-commerce Amazon Clone",
      category: "react",
      category2: "all",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKsw0wE25AxZPm4f8P9bzRl5IKY9AvjaABg&usqp=CAU",
      subTitle:
        "The Amazon Clone project is a comprehensive e-commerce solution built using ReactJS.",
      link: "https://amazonn-clone-sigma.vercel.app/",
      gitHub: "https://amazonn-clone-sigma.vercel.app/",
    },
    {
      id: 2,
      title: "website Gim fit",
      category: "react",
      category2: "all",
      image: "https://screenshots.codesandbox.io/jkqx3t/515.png",
      subTitle:
        "The website Gim fit project is a comprehensive Gim fit solution built using ReactJS.",
      link: "https://fit-club-lilac.vercel.app/",
      gitHub: "https://fit-club-lilac.vercel.app/",
    },

    {
      id: 3,
      title: "website Restaurant",
      category: "react",
      category2: "all",
      image:
        "https://mostaql.hsoubcdn.com/uploads/portfolios/873441/63c87a02398a4/Screenshot-2023-01-19-004457.png",
      subTitle:
        "The website Restaurant project is a comprehensive  Restaurant solution built using ReactJS.",
      link: "https://restrant-frontend-react.vercel.app/",

      gitHub: "https://restrant-frontend-react.vercel.app/",
    },
    {
      id: 4,
      title: "website portfolio react",
      category: "react",
      category2: "all",
      image:
        "/629a744633cf80efdf426182_NewSongChurch-ShilohCreative-p-1080.jpeg",
      subTitle:
        "The Amazon Clone project is a comprehensive e-commerce solution built using ReactJS.",
      link: "https://portfolio-react-mu-six.vercel.app/",
      gitHub: "https://portfolio-react-mu-six.vercel.app/",
    },
    {
      id: 5,
      title: "website watch by bootstrap ",
      category: "css",
      category2: "all",
      image: "/bandicam 2023-10-13 17-37-06-818.jpg",
      subTitle:
        " website watch project is a comprehensive website watch solution built using bootstrap css.",
      link: "https://website-bootstrap-watch.vercel.app/",
      gitHub: "https://website-bootstrap-watch.vercel.app/",
    },

    {
      id: 6,
      title: "website audi cars by bootstrap ",
      category: "css",
      category2: "all",
      image: "/audi.jpg",
      subTitle:
        "website cars project is a comprehensive website cars solution built using bootstrap css.",
      link: "https://audi-cars.vercel.app/",
      gitHub: "https://audi-cars.vercel.app/",
    },
    {
      id: 8,
      title: "project html&css ",
      category: "css",
      category2: "all",
      image: "/2.jpg",
      subTitle:
        " website html&css project is a comprehensive website html&css solution built using html&css .",
      link: "https://frontend-project-tau.vercel.app/",
      gitHub: "https://frontend-project-tau.vercel.app/",
    },
    {
      id: 7,
      title: "website iphone by js ",
      category: "javascript",
      image:
        "https://i.pinimg.com/236x/ef/51/e4/ef51e4fb7fd49e58c5c7a1505c831d7b.jpg",
      subTitle:
        "The website iphone project is a comprehensive website iphone solution built using javascript .",
      link:
        "https://make-a-creative-landing-page-using-html-css-js.vercel.app/",
      gitHub: "https://make-a-creative-landing-page-using-html-css-js.vercel.app/",
    },
      {  id: 9,
    title: "Fetra project",
    category: "FreeLancer",
    image: "/free.png",
    subTitle:
      " website client Doctor is a comprehensive website solution built using html & css & javascript and responsive design all screen .",
    link: "https://fetra-project-responsive.vercel.app/",
    gitHub: "https://fetra-project-responsive.vercel.app/",
  },
  ]);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
