import { useEffect, useRef } from "react";
import Description from "./description";

const Body = ({ setBodyY }) => {
  const ref = useRef(null);
  useEffect(() => {
    setBodyY(ref.current.getBoundingClientRect().top + window.pageYOffset);
  }, []);
  return (
    <div
      ref={ref}
      className="min-w-screen min-h-screen bg-gray-300 m-auto flex flex-col body"
    >
      <Description />
      <Description />
    </div>
  );
};
export default Body;
