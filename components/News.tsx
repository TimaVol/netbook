import firstImg from "@/public/images/News/1.png";
import secondImg from "@/public/images/News/2.png";
import thirdImg from "@/public/images/News/3.png";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/public/icons/ArrowRight.svg";
import Decor from "@/public/icons/news/decor.svg";

const items = [
  {
    title: "It Does Not Matter Hows Slowly go as Long",
    img: firstImg,
    decor: true,
    decorStyling: "-top-[10%] -left-[15%]",
  },
  {
    title: "Netbook Network Added New Photo Filter",
    img: secondImg,
  },
  {
    title: "We Optimised Netbooks Better Navigation",
    img: thirdImg,
    decor: true,
    decorStyling:
      "top-[50%] left-[85%] -translate-y-1/2 md:h-[100px] md:w-[100px] xl:h-auto xl:w-auto hidden md:block",
  },
];

export default function News() {
  return (
    <div className="overflow-hidden">
      <div className="container py-[30px]">
        <div className="mb-[30px] text-center md:mb-[80px]">
          <h5 className="mb-[10px] font-medium text-darkBlue">
            Get Our Aplication
          </h5>
          <h2 className="font-bold text-black-300">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[40px] lg:gap-[75px]">
          {items.map((item, idx) => (
            <div key={idx}>
              <div className="relative">
                <Image
                  src={item.img}
                  alt="img"
                  className="relative z-10 mb-[25px]"
                />
                {item.decor && (
                  <Decor className={`absolute ${item.decorStyling}`} />
                )}
              </div>

              <div className="flex">
                <div className="mr-[14px] mt-[10px] ml-[14px] w-[39px] border-t border-yellow lg:mt-[15px]" />

                <div>
                  <h4 className="mb-[10px] text-black-300 md:mb-[24px] lg:leading-[32px]">
                    {item.title}
                  </h4>
                  <Link
                    href={"#"}
                    className="flex w-max items-center text-lightGray transition-all md:hover:text-darkBlue"
                  >
                    <p className="mr-[10px]">Continue Reading</p> <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
