import { useEffect, useRef } from "react";

const Infos = ({ setFooterY }) => {
  const ref = useRef(null);
  useEffect(() => {
    setFooterY(ref.current.getBoundingClientRect().y);
  }, [ref.current]);
  return (
    <div ref={ref} className="w-[60%] bg-gray-700 m-auto flex py-6 footer">
      <div className="py-6 w-full h-full border-y-2 border-solid border-black">
        <div className="flex flex-col ml-12 justify-center items-start">
          <span>대표 | 사업자번호 </span>
          <span>직업정보제공사업 신고번호</span>
          <span>주소 </span>
          <span>전화번호 | 고객문의 </span>
          <span>
            <a>이용약관</a> <a>개인정보처리방침</a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Infos;
