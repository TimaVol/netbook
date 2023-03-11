import Logo from "@/public/icons/logo.svg";
import Twitter from "@/public/icons/footer/Twitter.svg";
import Instagram from "@/public/icons/footer/instagram.svg";
import Facebook from "@/public/icons/footer/facebook.svg";
import Linkedin from "@/public/icons/footer/Linkedin.svg";

const items = [
  {
    title: "Home",
    liks: ["Home", "Community", "Events", "Contact"],
  },
  {
    title: "Resources",
    liks: ["Blog", "News", "Guides", "Help Center"],
  },
  {
    title: "Community",
    liks: ["NewsFeed", "Profile", "Friends", "Forums"],
  },
  {
    title: "Main links",
    liks: ["Members", "Activity", "Groups", "Private Group"],
  },
];

const socials = [
  <Twitter key={0} />,
  <Instagram key={1} />,
  <Facebook key={2} />,
  <Linkedin key={3} />,
];

export default function Footer() {
  return (
    <footer className="bg-black-100 text-white">
      <div className="container grid grid-cols-2 gap-4 py-[30px] md:grid-cols-4 md:py-[78px] lg:grid-cols-6 lg:justify-items-center">
        {items.map((item, idx) => (
          <div key={idx}>
            <h4 className="mb-[10px] font-medium md:mb-[22px]">{item.title}</h4>
            {item.liks.map((link, index) => (
              <p key={index} className="mb-2 md:mb-3">
                {link}
              </p>
            ))}
          </div>
        ))}

        <div className="col-span-2 lg:max-w-[339px]">
          <h4 className="mb-[18px] font-medium">Subscribe Cirkle Newsletter</h4>
          <p className="mb-[32px] leading-5 md:leading-[28px]">
            Subscribe to be the first one to know about updates. Enter your
            email
          </p>

          <div className="flex w-full rounded-[12px] border border-white md:w-max">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="w-2/3 bg-transparent px-[24px] text-lightGray md:w-auto md:max-w-[212px]"
            />
            <p className="w-1/3 rounded-[12px] bg-white p-[16px] text-center font-medium text-black-100 md:w-auto md:max-w-[126px] md:px-[24px]">
              Subscribe
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black-200">
        <div className="container justify-between gap-4 py-[30px] md:flex md:py-[41px]">
          <p className="mb-4 text-[14px] md:mb-0">Besnik Creative Agency.</p>
          <Logo className="mb-4 md:mb-0" />

          <div className="flex w-max">
            {socials.map((social, idx) => (
              <div
                key={idx}
                className="mr-3 rounded-full bg-white p-2 last:mr-0"
              >
                {social}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
