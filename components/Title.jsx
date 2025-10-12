export default function Title() {
  return (
    <div className="text-white border inline-block text-xl py-[6px] px-[14px] relative">
        Hello There!
        <div className="h-2 w-3 bg-[#31F900] absolute -top-1 -left-[6px]"></div>
        <div className="h-2 w-3 bg-[#31F900] absolute -top-1 -right-[6px]"></div>
        <div className="h-2 w-3 bg-[#31F900] absolute -bottom-1 -left-[6px]"></div>
        <div className="h-2 w-3 bg-[#31F900] absolute -bottom-1 -right-[6px]"></div>
    </div>
  )
}
