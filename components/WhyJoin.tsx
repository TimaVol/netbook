import BlueCircle from "@/public/icons/blueCircle.svg";
import Play from "@/public/icons/play.svg";
import firstImg from "@/public/images/whyJoin/1.png";
import secondImg from "@/public/images/whyJoin/2.png";
import thirdImg from "@/public/images/whyJoin/3.png";
import Image from "next/image";
import { useRef } from "react";

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

    const viedo = useRef<HTMLVideoElement>(null)
    const playBg = useRef<HTMLImageElement>(null)

    const videoHandler = () =>{
        playBg.current!.style.opacity = '0'
        playBg.current!.style.visibility = 'hidden'
    }

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
      <div className="grid grid-cols-1 items-center gap-[20px] md:grid-cols-2 md:gap-[26px] md:w-1/2">
        <div className="relative md:row-span-2">
          <Play onClick={videoHandler} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10" />
          <video ref={viedo} className="absolute h-full w-full" src=""></video>
          <Image ref={playBg} src={firstImg} alt="img" className="transition-all"/>
        </div>
        <Image src={secondImg} alt="img" />
        <Image src={thirdImg} alt="img" />
      </div>
    </div>
  );
}
