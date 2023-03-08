import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import firstImg from "@/public/images/members/1.png";
import secondImg from "@/public/images/members/2.png";
import thirdImg from "@/public/images/members/3.png";
import fourthImg from "@/public/images/members/4.png";
import Image from "next/image";

const items = {
  tabs: ["Newst", "Popular", "Active"],

  tabPanels: [
    [
      {
        img: firstImg,
        title: "Fahim Rahman",
        username: "@rahman",
      },
      {
        img: secondImg,
        title: "Kazi Rahman",
        username: "@Rahman",
      },
      {
        img: thirdImg,
        title: "Masterero Ali",
        username: "@Master",
      },
      {
        img: fourthImg,
        title: "Alia Karon",
        username: "@Alia",
      },
    ],
    [
      {
        img: fourthImg,
        title: "Alia Karon",
        username: "@Alia",
      },
      {
        img: secondImg,
        title: "Kazi Rahman",
        username: "@Rahman",
      },
      {
        img: firstImg,
        title: "Fahim Rahman",
        username: "@rahman",
      },
      {
        img: thirdImg,
        title: "Masterero Ali",
        username: "@Master",
      },
    ],
    [
      {
        img: thirdImg,
        title: "Masterero Ali",
        username: "@Master",
      },
      {
        img: secondImg,
        title: "Kazi Rahman",
        username: "@Rahman",
      },
      {
        img: firstImg,
        title: "Fahim Rahman",
        username: "@rahman",
      },
      {
        img: fourthImg,
        title: "Alia Karon",
        username: "@Alia",
      },
    ],
  ],
};

export default function Members() {
  return (
    <div className="container py-[30px] md:pt-[130px] md:pb-[84px]">
      <div className="mb-[30px] text-center md:mb-[64px]">
        <h5 className="mb-[10px] font-medium text-darkBlue">Valuable Team</h5>
        <h2 className="mb-[19px] font-bold text-black-300">
          Our Active Members
        </h2>
        <p className="mx-auto max-w-[421px] text-lightGray">
          when an unknown printer took a galley of type and meeting fari
          scrambled it.
        </p>
      </div>

      <Tabs>
        <TabList className="mx-auto mb-[44px] flex max-w-[474px] justify-center rounded-[14px] bg-lightBlue p-[8px]">
          {items.tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className="w-1/3 cursor-pointer rounded-[14px] p-[15px] text-center font-medium text-black-100 aria-selected:bg-darkBlue aria-selected:text-white md:py-[20px]"
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        {items.tabPanels.map((tabPanel, index) => (
          <TabPanel
            key={index}
            className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[30px] lg:grid-cols-4"
          >
            {tabPanel.map((item, i) => (
              <div
                key={i}
                className="max-w-[270px] rounded-[14px] p-[30px] shadow-lg lg:py-[30px] xl:px-[52px]"
              >
                <Image
                  src={item.img}
                  alt="ava"
                  className="mb-[29px] max-w-[166px]"
                />
                <h3 className="mb-[14px] text-center font-semibold text-black-100">
                  {item.title}
                </h3>
                <p className="text-center text-lightGray">{item.username}</p>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
