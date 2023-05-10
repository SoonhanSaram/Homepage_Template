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
        className={`ml-24 ${NavHover} ${
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
        className={`${NavHover} ml-auto  ${
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
        className={`${NavHover} mx-12  ${
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
        className={`${NavHover} mr-24  ${
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
