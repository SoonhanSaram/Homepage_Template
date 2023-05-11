import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Clicked, ClickedWhite, NavHover } from "../css/class";

const Nav = (props) => {
  const [isClicked, setIsClicked] = useState("home");
  const [isTop, setIsTop] = useState(true);
  const [scrollY, setScrollY] = useState();
  const { homeY, bodyY, footerY } = props;
  // scroll을 통해서 nav 의 배경색 & click 된 버튼 찾기
  useEffect(() => {
    const scrollhandler = () => {
      const scrollTop = window.scrollY;
      if (scrollTop <= 0) {
        setIsTop(true);
      } else if (scrollTop > 0) {
        setIsTop(false);
        console.log(footerY - bodyY, scrollTop);
        switch (true) {
          case homeY >= scrollTop - 50:
            setIsClicked("home");
            break;
          case bodyY <= scrollTop && scrollTop < footerY - bodyY:
            setIsClicked("body");
            break;
          case footerY - bodyY < scrollTop:
            setIsClicked("footer");
            break;
        }
      }
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", scrollhandler);
    return () => window.removeEventListener("scroll", scrollhandler);
  }, [isTop, scrollY, homeY, bodyY, footerY]);

  const ClickHandler = (tagName) => {
    console.log(tagName);
    setIsClicked(tagName);
  };

  return (
    <ul
      className={`h-12 w-full flex fixed transition duration-500 z-[2] 
    ${isTop ? "bg-slate-700" : "bg-white"}`}
    >
      <li
        className={`ml-8 sm:ml-16 md:ml-24 lg:ml-24  ${NavHover} ${
          isClicked === "GoPT" ? (isTop ? `${ClickedWhite}` : `${Clicked}`) : ""
        } `}
      >
        <Link
          to={"home"}
          smooth={true}
          duration={500}
          onClick={() => ClickHandler("home")}
        >
          GoPT
        </Link>
      </li>
      <li
        className={`ml-auto sm:ml-auto md:ml-auto lg:ml-auto  ${NavHover}  ${
          isClicked === "home"
            ? isTop
              ? `${ClickedWhite}`
              : ` ${Clicked}`
            : ""
        }`}
      >
        <Link
          to={"home"}
          smooth={true}
          duration={500}
          onClick={() => {
            ClickHandler("home");
          }}
        >
          Home
        </Link>
      </li>
      <li
        className={`mx-0 sm:mx-4 md:mx-8 lg:mx-12 truncate ${NavHover}  ${
          isClicked === "body" ? (isTop ? `${ClickedWhite}` : `${Clicked}`) : ""
        }`}
      >
        <Link
          to="body"
          smooth={true}
          duration={500}
          onClick={() => ClickHandler("body")}
        >
          App설명
        </Link>
      </li>
      <li
        className={`mr-0 sm:mr-8 md:mr-16 lg:mr-24 ${NavHover} ${
          isClicked === "footer"
            ? isTop
              ? `${ClickedWhite}`
              : `${Clicked}`
            : ""
        }`}
      >
        <Link
          to="footer"
          smooth={true}
          duration={500}
          onClick={() => ClickHandler("footer")}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
