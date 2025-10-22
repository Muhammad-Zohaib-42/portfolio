import ProjectBox from "./ProjectBox";
import Title from "./Title";
import notesTaking from "../public/notes-taking-app.png"
import restCountries from "../public/rest-countries-app.png"
import expensesTracker from "../public/expenses-tracker-app.png"

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-20 relative z-50">
        <div className="max-width">
            <Title text="My Projects" />
            <h2 className="title">Let's <span className="hidden md:inline">Have a Look at</span> <span className="inline md:hidden">Explore</span> <span className="text-[#31F900] font-bold">My Portfolio</span></h2>
            <div className="mt-6 md:mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                <ProjectBox img={notesTaking} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Quick Notes App" url="https://quick-notes-app-by-constcoderr.netlify.app/" />
                <ProjectBox img={restCountries} skills={["HTML", "CSS", "JAVASCRIPT"]} title="Rest Countries App" url="https://rest-countries-app-by-constcoderr.netlify.app/" />
                <ProjectBox img={expensesTracker} skills={["REACT JS", "TAILWIND CSS"]} title="Expenses Tracker App" url="https://expenses-tracker-app-by-constcoderr.netlify.app/" />
            </div>
        </div>
    </section>
  )
}
