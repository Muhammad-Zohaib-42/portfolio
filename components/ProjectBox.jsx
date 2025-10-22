import Image from "next/image"
import Skill from "./Skill"

export default function ProjectBox({img, skills, title, url}) {
  return (
    <a href={url} target="_blank">
        <div className="text-white bg-black p-3 md:p-5 border border-[rgba(255,255,255,0.5)] rounded-lg">
            <div className="h-[242px] w-full relative">
                <Image src={img} alt={title} fill className="rounded-md" />
            </div>
            <div className="flex gap-2 mt-4 mb-2 md:mb-4">
                {skills.map((skill, index) => <Skill key={index} skillUsed={skill} />)}
            </div>
            <h2 className="text-2xl md:text-3xl">{title}</h2>
        </div>
    </a>
  )
}
