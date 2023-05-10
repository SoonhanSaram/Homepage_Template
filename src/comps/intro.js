const Intro = () => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="relative m-auto w-full h-[400px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('./logo.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          소개글을 이곳에 작성하세요
        </h1>
      </div>
    </div>
  );
};

export default Intro;
