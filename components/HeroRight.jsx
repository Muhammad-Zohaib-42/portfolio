import Image from "next/image";
import zohaib from "../public/zohaib.webp"

export default function HeroRight() {
  return (
    <div>
        <Image src={zohaib} alt="Zohaib Ranjha" width={500} height={500} className="-mt-[102px]" />
    </div>
  )
}
