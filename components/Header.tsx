import Image from "next/image";
import introImg from "@/public/images/intro.png";
import Logo from "@/public/icons/logo.svg";

export default function Header() {
  return (
    <div>
      <div className="container">
        <header className=" mb-[30px] border-b border-lightBlue py-[15px] md:mb-[72px] md:py-[30px]">
          <Logo />
        </header>

        <div className="flex flex-col md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className="mb-[20px] w-max rounded-[8px] bg-lightBlue py-[12px] px-[30px] font-medium text-darkBlue">
              Netbook community
            </div>
            <h1 className="mb-[18px] font-bold text-black-300">
              Your Solutions For Community!
            </h1>
            <h5 className="mb-[42px] leading-5 text-lightGray md:leading-[28px]">
              More than 2 billion people in over countries use socibook to stay
              in touch with friends & family.
            </h5>

            <div className="flex">
              <div className="mr-[18px] flex w-1/2 cursor-pointer items-center justify-center rounded-[14px] bg-darkBlue p-[15px] px-[18px] text-white shadow-sm shadow-darkBlue md:w-max md:py-[22px] md:px-[38px]">
                <p className="text-[14px] font-medium">About More</p>
              </div>
              <div className="flex w-1/2 cursor-pointer items-center justify-center rounded-[14px] border-darkBlue bg-darkBlue p-[15px] px-[18px] text-white  md:w-max md:py-[22px] md:px-[38px]">
                <p className="text-[14px] font-medium">Invite Friend</p>
              </div>
            </div>
          </div>

          <Image src={introImg} alt="img" />
        </div>
      </div>
    </div>
  );
}
