import Image from "next/image";
import codewise from "../public/codewise.png"

export default function ExperienceBox() {
  return (
    <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg mt-6 md:mt-10 w-full md:w-[420px] relative">
        <div className="absolute -left-2 top-4 w-[7px] h-16 bg-[#32F900] rounded-tl-lg rounded-bl-lg"></div>
        <div className="flex gap-2 md:gap-4">
            <div className="bg-white h-15 w-15 lg:h-20 lg:w-20 rounded-md pt-3">
                <Image src={codewise} alt="Code Wise Logo" />
            </div>
            <div>
                <h3 className="text-sm md:text-base">Jan 2023 - Jan 2024</h3>
                <h3 className="text-[17px] md:text-[19px] font-bold text-[#32F900]">Junior Wordpress Developer</h3>
                <h3 className="text-sm md:text-base">Code Wise</h3>
            </div>
        </div>
        <p className="mt-2 md:mt-4 text-sm tracking-wider text-[rgba(255,255,255,0.8)] font-extralight">Joined as a beginner and worked on live projects using Elementor to build multiple responsive websites. Collaborated with the WordPress and graphic teams, which sparked a strong interest in coding and led to self-learning front-end web development.</p>
    </div>
  )
}
