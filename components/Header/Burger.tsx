import { useState } from "react";
// import Rodal from "rodal";
import Link from "next/link";
import SubMenuArrow from "@/public/icons/subMenuArrow.svg";
import Search from "@/public/icons/search.svg";

export default function Burger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="mr-[18px] mb-4 flex w-full items-center border-b border-lightBlue pb-[5px] lg:mr-[47px] lg:pb-[10px]">
          <Search className="mr-[8px] w-[13px]" />

          <input
            type="text"
            name=""
            id=""
            placeholder="Search Hare..."
            className="text-12px w-full"
          />
        </div>

        <div className="font-medium text-lightGray">
          <Link href={"#"} className="mb-4">
            <p className="text-lg ">Home</p>
          </Link>
          <div className="relative mb-4 ">
            <p className="peer flex w-max cursor-pointer items-center text-lg">
              Community <SubMenuArrow className="ml-2" />
            </p>

            <div className="invisible absolute -bottom-[113px] left-0 z-10 h-[110px] w-[100px] rounded border border-lightGray bg-white opacity-0 transition-all duration-300 ease-in-out hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
              <div className="p-[10px] text-sm">
                <Link href={"#"} className="mb-2 w-max">
                  About
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Docs
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Showcase
                </Link>
                <Link href={"#"} className="mb-2 w-max">
                  Explore
                </Link>
              </div>
            </div>
          </div>

          <Link href={"#"} className="mb-4">
            <p className="text-lg">Blog</p>
          </Link>
          <Link href={"#"} className="mb-4">
            <p className=" text-lg">Events</p>
          </Link>
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="shadow-cyan-500/50 mx-auto flex w-max max-w-[202px] cursor-pointer items-center rounded-[14px] bg-darkBlue p-[15px] px-[25px] font-medium text-white shadow-lg md:py-[17px] md:px-[42px]"
        >
          <p>Log in</p>
        </div>
      </div>

      {/* <Rodal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        width={301}
        height={200}
        className="text-black"
      >
        <div className="mt-6">
          <h4 className="mb-2">
            Sorry, but this feature is currently unavailable
          </h4>
          <p>The function of request demo is under development.</p>
        </div>
      </Rodal> */}
    </>
  );
}
