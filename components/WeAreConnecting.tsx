import ArrowRight from "@/public/icons/ArrowRight.svg";
import Star from "@/public/icons/Star.svg";
import Trophy from "@/public/icons/Trophy.svg";
import peopleImg from "@/public/images/WeAreConnecting/people.png";
import githubImg from "@/public/images/WeAreConnecting/github.png";
import Image from "next/image";
import Link from "next/link";
import Rodal from "rodal";
import { useState } from "react";

const items = [
  {
    title: {
      text: "4.8 Rating",
      icon: <Star />,
    },
    subtitle: {
      text: (
        <p>
          <span className="mr-[5px] text-darkBlue">+836k</span>Members
        </p>
      ),
      img: peopleImg,
      imgWidth: "max-w-[60px]",
    },
    text: "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    linkText: "Join Our Community",
  },
  {
    title: {
      text: "Awwwards",
      icon: <Trophy />,
    },
    subtitle: {
      text: (
        <p>
          Best of
          <span className="mx-[5px] text-darkBlue">2021</span>on Github
        </p>
      ),
      img: githubImg,
      imgWidth: "max-w-[24px]",
    },
    text: "More than 2 billion we people over countries use socibooks we to stay in touch with friends.",
    linkText: "Go To Awards",
  },
];

export default function WeAreConnecting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container grid grid-cols-1 gap-[20px] py-[30px] md:grid-cols-2 md:py-[75px] lg:grid-cols-3 lg:gap-[26px] ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-[14px] p-[20px] shadow-lg md:p-[44px]"
          >
            <div className="mb-[32px] flex items-center">
              {item.title.icon}
              <h4 className="ml-[10px] font-medium text-black-300">
                {item.title.text}
              </h4>
            </div>
            <div className="mb-[40px] flex items-center font-medium text-darkGray">
              <Image
                src={item.subtitle.img}
                alt="img"
                className={`mr-[10px] max-w-[60px] md:mr-[16px] ${item.subtitle.imgWidth}`}
              />
              {item.subtitle.text}
            </div>
            <p className="mb-[40px] leading-5 text-lightGray md:leading-[26px]">
              {item.text}
            </p>
            <Link
              href={"#"}
              className="flex w-max items-center font-medium text-black-100 transition-all md:hover:text-darkBlue"
            >
              <p className="mr-[8px]">{item.linkText}</p> <ArrowRight />
            </Link>
          </div>
        ))}

        <div className="md:col-span-2 lg:col-auto lg:max-w-[365px]">
          <h5 className="mb-[10px] font-medium text-darkBlue">
            Our Achievement
          </h5>
          <h2 className="mb-[19px] font-bold text-black-300">
            We are Connecting You The Digital Life.
          </h2>
          <p className="mx-auto  mb-[38px] leading-5 text-lightGray md:leading-[26px]">
            The scope the Social Media becomes crucial Is helps the business to
            directly engage with their needs and wants.
          </p>

          <div
            onClick={() => setIsModalOpen(true)}
            className="flex w-max cursor-pointer items-center rounded-[14px] border border-transparent bg-darkBlue py-[22px] px-[38px] text-white shadow-sm shadow-darkBlue transition-all hover:border-darkBlue hover:bg-transparent hover:text-darkBlue hover:shadow-none"
          >
            <p className="mr-[20px] text-[14px] font-medium">Discover me</p>{" "}
            <ArrowRight />
          </div>
        </div>
      </div>

      <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        width={301}
        height={130}
        className="text-black-100"
      >
        <div className="flex h-full items-center">
          <h4 className="text-center">
            Sorry, but this feature is currently unavailable
          </h4>
        </div>
      </Rodal>
    </>
  );
}
