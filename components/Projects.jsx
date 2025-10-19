import ProjectBox from "./ProjectBox";
import Title from "./Title";

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 relative z-50">
        <div className="max-width">
            <Title text="My Projects" />
            <h2 className="title">Let's Have a Look at <span className="text-[#31F900] font-bold">My Portfolio</span></h2>
            <div className="mt-6 md:mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
        </div>
    </section>
  )
}
