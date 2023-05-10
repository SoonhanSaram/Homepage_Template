import { useEffect, useRef } from "react";
import Infos from "./infos";

const Footer = ({ setFooterY }) => {
  const ref = useRef(null);
  useEffect(() => {
    setFooterY(ref.current.getBoundingClientRect().y);
  }, []);
  return (
    <div ref={ref} className="min-w-screen bg-gray-500 m-auto flex footer">
      <Infos />
    </div>
  );
};

export default Footer;
