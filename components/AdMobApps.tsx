import Image from "next/image";
import appStoreImg from "@/public/images/appStore.png";
import playStoreImg from "@/public/images/playStore.png";
import mobileImg from "@/public/images/mobile.png";

export default function AdMobApps() {
  return (
    <div className="bg-lightBlue">
      <div className="container flex flex-col justify-between pt-[44px] md:flex-row-reverse">
        <Image
          src={mobileImg}
          alt="mible img"
          className="mx-auto mb-[30px] max-w-[80%] md:mx-0 md:mb-0 md:max-w-[280px] lg:max-w-[440px]"
        />
        <div className="md:max-w-[351px]">
          <h5 className="mb-[10px] font-medium text-darkBlue">
            Get Our Aplication
          </h5>
          <h2 className="mb-[18px] font-bold leading-8 text-black-300 lg:leading-[52px]">
            You Can Easily Find This App…!
          </h2>
          <p className="mb-[36px] leading-5 text-lightGray lg:leading-[26px]">
            I say chap that&#8217;s suing lavatory chip shop gosh off his
            smashing boot are you taking the piss posh loo brilliant.
          </p>

          <div className="mb-[20px] flex justify-between md:mb-0 md:justify-start">
            <Image
              src={appStoreImg}
              alt="appStore Img"
              className="mr-3 w-[48%] md:mr-[20px] md:max-w-[144px]"
            />
            <Image
              src={playStoreImg}
              alt="playStore Img"
              className="w-[48%] md:max-w-[144px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
