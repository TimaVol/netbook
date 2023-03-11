import BlueCircle from "@/public/icons/blueCircle.svg";
import Play from "@/public/icons/play.svg";
import firstImg from "@/public/images/whyJoin/1.png";
import secondImg from "@/public/images/whyJoin/2.png";
import thirdImg from "@/public/images/whyJoin/3.png";
import Image from "next/image";
import { useRef, useState } from "react";

const items = [
  {
    icon: <BlueCircle />,
    text: "Groups",
  },
  {
    icon: <BlueCircle />,
    text: "Messages",
  },
  {
    icon: <BlueCircle />,
    text: "Share",
  },
];

export default function WhyJoin() {
  const [isVideoPlaing, setIsVideoPlaing] = useState(false);

  const video = useRef<HTMLVideoElement>(null);
  const playBg = useRef<HTMLImageElement>(null);
  const playBtn = useRef<HTMLImageElement>(null);

  const videoHandler = () => {
    if (!isVideoPlaing) {
      playBg.current!.style.opacity = "0";
      playBtn.current!.style.opacity = "0";
      playBg.current!.style.visibility = "hidden";
      playBtn.current!.style.visibility = "hidden";
      video.current!.play();
      setIsVideoPlaing(true);
    } else {
      playBg.current!.style.opacity = "1";
      playBtn.current!.style.opacity = "1";
      playBg.current!.style.visibility = "visible";
      playBtn.current!.style.visibility = "visible";
      video.current!.pause();
      setIsVideoPlaing(false);
    }
  };

  return (
    <div className="container items-center py-[30px] md:flex md:py-[36px]">
      <div className="mb-5 md:mb-0 md:w-1/2">
        <h5 className="mb-[10px] font-medium text-darkBlue">Whats Netboks?</h5>
        <h2 className="mb-[16px] font-bold text-black-300">
          Why Join to Netbook Social Network?
        </h2>
        <p className="mb-5 max-w-[421px] text-lightGray md:mb-[36px]">
          Recent surveys have indicated that small businesses recognise the need
          they have to connect with consumer.
        </p>

        {items.map((item, idx) => (
          <div
            key={idx}
            className="mb-2 flex items-center last:mb-0 md:mb-[16px]"
          >
            {item.icon}
            <h5 className="ml-[12px] text-black-300">{item.text}</h5>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 items-center gap-[20px] md:w-1/2 md:grid-cols-2 md:gap-[26px]">
        <div className="relative rounded-[14px] shadow-lg md:row-span-2">
          <div
            ref={playBtn}
            onClick={videoHandler}
            className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <Play />
          </div>
          <video
            onClick={videoHandler}
            ref={video}
            className="absolute h-full w-full"
            src="/video.mp4"
          ></video>
          <Image
            ref={playBg}
            src={firstImg}
            alt="img"
            className="relative z-10 transition-all"
          />
        </div>
        <Image src={secondImg} alt="img" />
        <Image src={thirdImg} alt="img" />
      </div>
    </div>
  );
}
