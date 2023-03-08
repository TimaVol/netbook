import FirstIcon from "@/public/icons/community/1.svg";
import SecondIcon from "@/public/icons/community/2.svg";
import ThirdIcon from "@/public/icons/community/3.svg";
import FourthIcon from "@/public/icons/community/4.svg";
import FifthIcon from "@/public/icons/community/5.svg";
import SixthIcon from "@/public/icons/community/6.svg";

const items = [
  {
    icon: <FirstIcon />,
    title: "Members, Friends",
    text: "Members, Friends Connection ( like followers ), Private Message",
    shadowColor: "shadow-darkBlue",
  },
  {
    icon: <SecondIcon />,
    title: "Groups",
    text: "Your users can create groups to let other users to join and talk",
    shadowColor: "shadow-pink",
  },
  {
    icon: <ThirdIcon />,
    title: "Forum",
    text: "Forum is ready by BBPress. Your users can make topics and talk.",
    shadowColor: "shadow-yellow",
  },
  {
    icon: <FourthIcon />,
    title: "Custom Module",
    text: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    shadowColor: "shadow-darkBlue",
  },
  {
    icon: <FifthIcon />,
    title: "List Builder",
    text: "Members, Groups list can be modified by drag & drop live builder.",
    shadowColor: "shadow-pink",
  },
  {
    icon: <SixthIcon />,
    title: "List Scroll Effects",
    text: "8 different scroll effects are ready. You can always change by your tastes.",
    shadowColor: "shadow-yellow",
  },
];

export default function Community() {
  return (
    <div className="bg-secondaryGradient">
      <div className="container py-[30px] md:pt-[60px] md:pb-[80px]">
        <div className="mb-[30px] text-center md:mb-[64px]">
          <h5 className="mb-[10px] font-medium text-darkBlue">Our Community</h5>
          <h2 className="mb-[19px] font-bold text-black-300">
            Community Main Feature
          </h2>
          <p className="mx-auto max-w-[421px] text-lightGray">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>

        <div className="grid gap-[20px] md:grid-cols-2 md:grid-rows-[182px] lg:gap-[44px]">
          {items.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex rounded-[14px] bg-white p-[15px] md:p-[30px] lg:p-[40px]"
              >
                <div
                  className={`mr-[36px] h-max rounded-[24px] shadow-sm ${item.shadowColor}`}
                >
                  {item.icon}
                </div>
                <div className="">
                  <h3 className="mb-[14px] text-black-200">{item.title}</h3>
                  <p className="leading-5 text-lightGray md:leading-[26px]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
