import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { playButton, soundButton, videoWrap } from "../css/class";
const MobileVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const ButtonHandler = (button, setButton) => {
    if (button) {
      if (setButton === setIsPlaying) {
        videoRef.current.pause();
      } else videoRef.current.volume = 0;
      setButton(false);
    } else if (!button) {
      if (setButton === setIsPlaying) {
        videoRef.current.play();
      } else videoRef.current.volume = 0.5;
      setButton(true);
    }
  };
  return (
    <div className={`${videoWrap}`}>
      <div className="w-1/2 bg-gray-700">
        <div className="h-full flex flex-col justify-center items-center border-solid border-2 border-white ">
          <div className="text-white text-4xl font-bold mb-8">Logo</div>
          <div className="text-white text-lg mb-32 text-ellipsis">
            <p>소개글을 여기에 적어주세요.</p>
            <p>이 부분은 자유롭게 편집 가능합니다.</p>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="px-2 py-0 border-2 border-gray-300 flex-1 mx-2 ">
              <a href="https://play.google.com/store">
                <img
                  src="google-play-badge.png"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
            <div className="p-2 border-2 border-gray-300 flex-1 mx-2 ">
              <a href="https://apps.apple.com/">
                <img
                  src="app-store-badge.svg"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative ">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center border-solid border-2 border-white">
            <video
              src="./gopt_home.mp4"
              className="absolute top-0 left-0 w-full h-full object-fill"
              autoPlay
              loop
              muted={true}
              ref={videoRef}
            />
            <button
              className={`${playButton}`}
              onClick={() => ButtonHandler(isPlaying, setIsPlaying)}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              className={`${soundButton}`}
              onClick={() => ButtonHandler(isMuted, setIsMuted)}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileVideo;
