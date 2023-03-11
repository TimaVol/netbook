import Image from "next/image";
import introImg from "@/public/images/intro.png";
import Logo from "@/public/icons/logo.svg";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Burger from "./Burger";
import Link from "next/link";
import SubMenuArrow from "@/public/icons/subMenuArrow.svg";
import Search from "@/public/icons/search.svg";

const styles = {
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    top: "0",
    background: "rgba(0, 0, 0, 0.3)",
  },
};
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const burgerOnOpenHandler = () => {
    setIsBurgerOpen(!isBurgerOpen);
    document.body.style.overflow = !isBurgerOpen ? "hidden" : "auto";
  };
  return (
    <>
      <div className="bg-primaryGradient">
        <div className="container">
          <header className="mb-[30px] flex items-center justify-between border-b border-lightBlue py-[15px] md:mb-[72px] md:py-[30px]">
            <div className="flex items-center">
              <Logo className="mr-5 lg:mr-[72px]" />
              <div className="hidden text-[12px] font-medium text-lightGray md:flex">
                <Link href={"#"} className="mr-4">
                  <p>Home</p>
                </Link>
                <div className="relative mr-4">
                  <p className="peer flex w-max cursor-pointer items-center">
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

                <Link href={"#"} className="mr-4">
                  <p>Blog</p>
                </Link>
                <Link href={"#"} className="mr-4">
                  <p>Events</p>
                </Link>
              </div>
            </div>

            <div className="hidden items-center md:flex">
              <div className="mr-[18px] flex w-max items-center border-b border-lightBlue pb-[5px] lg:mr-[47px] lg:pb-[10px]">
                <Search className="mr-[8px]" />

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Hare..."
                  className="text-12px w-[108px]"
                />
              </div>

              <div
                onClick={() => setIsModalOpen(true)}
                className="shadow-cyan-500/50 mx-auto flex w-max max-w-[202px] cursor-pointer items-center rounded-[14px] bg-darkBlue p-[15px] px-[20px] font-medium text-white shadow-lg md:py-[17px] md:px-[42px]"
              >
                <p>Log in</p>
              </div>
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isBurgerOpen} toggle={burgerOnOpenHandler} />
            </div>
          </header>

          <div className="flex flex-col items-center justify-between py-[30px] md:flex-row md:py-[72px]">
            <div className="mb-6 max-w-[515px] md:mb-0 md:mr-2 md:w-1/2">
              <div className="mb-[20px] w-max rounded-[8px] bg-lightBlue py-[12px] px-[30px] font-medium text-darkBlue">
                Netbook community
              </div>
              <h1 className="mb-[18px] font-bold text-black-300">
                Your Solutions For Community!
              </h1>
              <h5 className="mb-[42px] leading-5 text-lightGray md:leading-[28px]">
                More than 2 billion people in over countries use socibook to
                stay in touch with friends & family.
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

            <Image
              src={introImg}
              alt="img"
              priority
              className=" md:h-[275px] md:w-1/2 lg:h-auto lg:max-w-[585px]"
            />
          </div>
        </div>
      </div>

      <Menu
        styles={styles}
        customBurgerIcon={false}
        isOpen={isBurgerOpen}
        onClose={burgerOnOpenHandler}
      >
        <Burger />
      </Menu>
    </>
  );
}
