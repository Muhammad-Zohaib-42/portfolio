import Image from "next/image";
import zohaib from "../public/zohaib.webp"
import SocialIcons from "./SocialIcons";

export default function HeroRight() {
  return (
    <div className="relative w-full md:w-[40%] h-80 md:h-full">
        <Image src={zohaib} alt="Zohaib Ranjha" className="absolute bottom-0 drop-shadow-[0_.5px_2px_#31F900] md:drop-shadow-[0_.5px_3px_#31F900] hover:drop-shadow-[0_4px_8px_#31F900] transition md:saturate-150" width={600} height={600} />
        <SocialIcons />
    </div>
  )
}
