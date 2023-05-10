import "./App.css";
import Nav from "./comps/nav";
import Home from "./comps/home";
import Footer from "./comps/infos";
import Body from "./comps/body";
import { useEffect, useRef, useState } from "react";

function App() {
  const [homeY, setHomeY] = useState();
  const [bodyY, setBodyY] = useState();
  const [footerY, setFooterY] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Nav
        homeY={homeY}
        bodyY={bodyY}
        footerY={footerY}
        className="absolute top-0 left-0 fixed"
      />
      <div>
        <Home setHomeY={setHomeY} />
        <Body setBodyY={setBodyY} />
      </div>
      <Footer setFooterY={setFooterY} />
    </div>
  );
}

export default App;
