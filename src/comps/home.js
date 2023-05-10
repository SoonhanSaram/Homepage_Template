import { useEffect, useRef } from "react";
import MobileVideo from "./mobileVideo";

const Home = ({ setHomeY }) => {
  const ref = useRef(null);
  useEffect(() => {
    setHomeY(ref.current.getBoundingClientRect().top + window.pageYOffset);
  }, []);
  return (
    <div
      ref={ref}
      className="min-w-screen min-h-screen bg-black m-auto flex home"
    >
      <MobileVideo />
    </div>
  );
};

export default Home;
