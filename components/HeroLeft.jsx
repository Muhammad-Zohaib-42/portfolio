import Title from "./Title";

export default function HeroLeft() {
  return (
    <div className="text-white w-full md:w-[60%] h-full flex items-center mt-4">
        <div>
          <Title text="Hello There!" />
          <h1 className="text-[32.5px] md:text-[40px] lg:text-5xl font-semibold text-white leading-10 md:leading-16 my-3 md:my-6">
              <span className="text-[#31F900] block"><span className="hidden md:inline">I'm</span> Muhammad Zohaib,</span>
              <span className="block">Front-End Developer</span>
          </h1>
          <p className="mb-6 md:mb-10 text-sm md:text-base">I build responsive, performance driven websites and enjoy turning ideas into code.</p>
          <a href="#" className="btn bg-[#31F900] text-black mr-3">View My Work</a>
          <a href="#" className="bg-black text-white btn border border-[#31F900]">Download CV</a>
        </div>
    </div>
  )
}