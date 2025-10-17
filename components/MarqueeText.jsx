import Star from "./Star";

export default function MarqueeText() {
  return (
    <div className="bg-[#31F900] h-12 md:h-[59px] relative z-10 overflow-x-hidden flex items-center whitespace-nowrap">
      <div className="flex gap-10 flex-nowrap animate-scroll">
        <div className="flex items-center gap-10 font-bold text-xl md:text-2xl flex-shrink-0">
          <h3>HTML</h3>
          <Star />
          <h3>CSS</h3>
          <Star />
          <h3>TAILWIND CSS</h3>
          <Star />
          <h3>JAVASCRIPT</h3>
          <Star />
          <h3>REACT JS</h3>
          <Star />
          <h3>Redux JS</h3>
          <Star />
          <h3>NEXT JS</h3>
          <Star />
          <h3>GIT & GITHUB</h3>
          <Star />
          <h3>GSAP</h3>
          <Star />
        </div>

        {/* Duplicate content for seamless looping */}
        <div className="flex items-center gap-10 font-bold text-xl md:text-2xl flex-shrink-0">
          <h3>HTML</h3>
          <Star />
          <h3>CSS</h3>
          <Star />
          <h3>TAILWIND CSS</h3>
          <Star />
          <h3>JAVASCRIPT</h3>
          <Star />
          <h3>REACT JS</h3>
          <Star />
          <h3>Redux JS</h3>
          <Star />
          <h3>NEXT JS</h3>
          <Star />
          <h3>GIT & GITHUB</h3>
          <Star />
          <h3>GSAP</h3>
          <Star />
        </div>
      </div>
    </div>
  );
}
