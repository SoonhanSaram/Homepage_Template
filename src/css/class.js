import classNames from "classnames";
export const NavHover = classNames(
  "hover:bg-gray-200 hover:mt-2 hover:border-b-2 hover:border-red-400 hover:shadow hover:shadow-slate-500 my-auto cursor-pointer text-2xl transition duration-300 ease-in-out px-4 text-sm sm:text-base md:text-2xl"
);

export const Clicked = classNames("border-b-2 border-red-400");
export const ClickedWhite = classNames("border-b-2 border-white");

export const playButton = classNames(
  "rounded-full w-[30px] h-[30px] rouded-ful  border-2 border-white absolute bottom-6 left-[80%] transform -translate-x-1/2 flex justify-center items-center text-white"
);

export const soundButton = classNames(
  "rounded-full w-[30px] h-[30px] rouded-ful  border-2 border-white absolute bottom-6 left-[90%] transform -translate-x-1/2 flex justify-center items-center text-white"
);

export const videoWrap = classNames(
  "flex flex-row m-auto lg:w-[60%] lg:h-[70vh], md:w-[70%] md:h-[70vh] sm:w-[80%] sm:h-[70vh] w-[80vw] h-[70vh] "
);
