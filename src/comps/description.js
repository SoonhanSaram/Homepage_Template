const Description = () => {
  return (
    <div className="w-[60%] min-h-screen bg-gray-200 m-auto flex body">
      <div className="w-1/2 h-[70vh] m-auto flex flex-col ">
        <div className="h-2/5 bg-gray-700 flex justify-center items-center">
          <div className="text-white text-lg text-center">
            <p>소개글을 여기에 적어주세요.</p>
            <p>이 부분은 자유롭게 편집 가능합니다.</p>
          </div>
        </div>
        <div className="h-3/5 flex bg-gray-700 justify-center items-center">
          <img
            src="https://source.unsplash.com/random"
            className="w-4/5 h-full object-contain"
          />
        </div>
      </div>
      <div className="w-1/2 h-[70vh] m-auto flex flex-col">
        <div className="h-3/5 bg-gray-700 flex justify-center items-center">
          <img
            src="https://source.unsplash.com/random"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>
        <div className="h-2/5 bg-gray-700 flex justify-center items-center">
          <div className="text-white text-lg text-center">
            <p>소개글을 여기에 적어주세요.</p>
            <p>이 부분은 자유롭게 편집 가능합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
