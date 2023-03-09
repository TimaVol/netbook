import AdMobApps from "@/components/AdMobApps";
import Community from "@/components/Community";
import Header from "@/components/Header";
import Members from "@/components/Members";
import News from "@/components/News";
import WeAreConnecting from "@/components/WeAreConnecting";
import WhyJoin from "@/components/WhyJoin";

export default function Home() {
  return (
    <>
      <Header />
      <WhyJoin />
      <WeAreConnecting />
      <Community />
      <Members />
      <AdMobApps />
      <News />
    </>
  );
}
