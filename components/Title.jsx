export default function Title({text}) {
  return (
    <div className="text-white border border-[rgba(255,255,255,0.5)] inline-block text-sm md:text-xl py-1 md:py-[6px] px-3 md:px-[14px] relative">
        {text}
        <div className="h-[6px] md:h-2 w-[10px] md:w-3 bg-[#31F900] absolute -top-[3px] md:-top-1 -left-[5px] md:-left-[6px]"></div>
        <div className="h-[6px] md:h-2 w-[10px] md:w-3 bg-[#31F900] absolute -top-[3px] md:-top-1 -right-[5px] md:-right-[6px]"></div>
        <div className="h-[6px] md:h-2 w-[10px] md:w-3 bg-[#31F900] absolute -bottom-[3px] md:-bottom-1 -left-[5px] md:-left-[6px]"></div>
        <div className="h-[6px] md:h-2 w-[10px] md:w-3 bg-[#31F900] absolute -bottom-[3px] md:-bottom-1 -right-[5px] md:-right-[6px]"></div>
    </div>
  )
}
