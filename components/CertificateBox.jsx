import Image from "next/image";
import certificate from "../public/web-design-&-development-certificate.jpg"

export default function CertificateBox() {
  return (
    <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg mt-6 md:mt-10 w-full md:w-[420px] relative">
        <div className="absolute -left-2 top-4 w-[7px] h-16 bg-[#32F900] rounded-tl-lg rounded-bl-lg"></div>
      <div className="h-[242px] w-full relative">
        <Image src={certificate} alt="web development certificate" fill className="rounded-md" />
      </div>
        <h3 className="text-sm md:text-base mt-3">Apr 2023 - Sep 2023</h3>
        <h3 className="text-[17px] md:text-[19px] font-bold text-[#32F900]">Web Design & Development</h3>
        <h3 className="text-sm md:text-base">Logix College, PBTE, Lahore — under PSDF</h3>
    </div>
  );
}
