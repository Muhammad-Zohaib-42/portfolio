import Image from "next/image";
import zohaib from "../public/zohaib.webp"
import SocialIcons from "./SocialIcons";

export default function HeroRight() {
  return (
    <div className="relative w-full md:w-[40%] h-80 md:h-full">
        <Image src={zohaib} alt="Zohaib Ranjha" className="absolute bottom-0" width={600} height={600} />
        <SocialIcons />
    </div>
  )
}
