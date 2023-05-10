import classNames from "classnames";
export const NavHover = classNames(
  "hover:bg-gray-200 hover:mt-2 hover:border-b-2 hover:border-red-400 hover:shadow hover:shadow-slate-500 my-auto cursor-pointer text-2xl transition duration-300 ease-in-out px-4"
);

export const Clicked = classNames("border-b-2 border-red-400");
export const ClickedWhite = classNames("border-b-2 border-white");

export const playButton = classNames(
  "rounded-full w-[30px] h-[30px] rouded-ful  border-2 border-white absolute bottom-6 left-[80%] transform -translate-x-1/2 flex justify-center items-center text-white"
);

export const soundButton = classNames(
  "rounded-full w-[30px] h-[30px] rouded-ful  border-2 border-white absolute bottom-6 left-[90%] transform -translate-x-1/2 flex justify-center items-center text-white"
);
