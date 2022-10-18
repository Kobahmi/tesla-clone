import "./styles/style.css";
import Header from "./components/Header";
import ModelS from "./components/ModelS";
import ModelY from "./components/ModelY";
import ModelX from "./components/ModelX";
import Model3 from "./components/Model3";
import Solar from "./components/Solar";
import Accessories from "./components/Accessories";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState("none");

  useEffect(() => {
    const displayMenu = () => {
      if (menu === "none") {
        setMenu("flex");
      } else {
        setMenu("none");
      }
    };
    document.querySelector(".menu-btn").addEventListener("click", displayMenu);
    document.querySelector(".left").addEventListener("click", displayMenu);
    document.querySelector(".close").addEventListener("click", displayMenu);
    return () => {
      document
        .querySelector(".menu-btn")
        .removeEventListener("click", displayMenu);
      document.querySelector(".left").removeEventListener("click", displayMenu);
      document
        .querySelector(".close")
        .removeEventListener("click", displayMenu);
    };
  }, [menu]);

  return (
    <div className="App">
      <Header />
      <ModelS link="#model-y" />
      <ModelY />
      <ModelX />
      <Model3 />
      <Solar />
      <Accessories />
      <Menu menu={menu} />
    </div>
  );
}

export default App;
