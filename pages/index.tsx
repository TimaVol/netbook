import AdMobApps from "@/components/AdMobApps";
import Community from "@/components/Community";
import Members from "@/components/Members";
import News from "@/components/News";
import WeAreConnecting from "@/components/WeAreConnecting";

export default function Home() {
  return (
    <>
      <WeAreConnecting />
      <Community />
      <Members />
      <AdMobApps />
      <News />
    </>
  );
}
