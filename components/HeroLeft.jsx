import DownloadCv from "./DownloadCv";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import Title from "./Title";
import ViewWork from "./ViewWork";

export default function HeroLeft() {
  return (
    <div className="text-white w-full md:w-[60%] h-full flex items-center mt-4">
        <div>
          <Title text="Hello There!" />
          <HeroTitle />
          <HeroDescription />
          <ViewWork />
          <DownloadCv />
        </div>
    </div>
  )
}