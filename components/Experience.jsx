import ExperienceBox from "./ExperienceBox";
import Title from "./Title";

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 relative z-50">
        <div className="max-width">
            <Title text="Work Experience" />
            <h2 className="title">My <span className="text-[#31F900] font-bold">Professional</span> Journey</h2>
            <ExperienceBox />
        </div>
    </section>
  )
}
