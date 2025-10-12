import Title from "./Title";

export default function HeroLeft() {
  return (
    <div className="text-white">
        <Title />
        <h1 className="text-5xl font-semibold text-white leading-16 my-6">
            <span className="text-[#31F900] block">I'm Muhammad Zohaib,</span>
            <span className="block">Front-End Developer</span>
        </h1>
        <p className="mb-10">I build responsive, performance driven websites and enjoy turning ideas into code.</p>
        <a href="#" className="btn bg-[#31F900] text-black mr-3">View My Work</a>
        <a href="#" className="bg-black text-white btn border border-[#31F900]">Download CV</a>
    </div>
  )
}
