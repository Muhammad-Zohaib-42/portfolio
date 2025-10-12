export default function Header() {
  return (
    <header>
      <div className="max-width flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold">
          Zohaib<span className="text-[#31F900]">.</span>
        </a>
        <nav className="space-x-10 text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <a href="#" className="bg-[#31F900] px-6 py-[10px] rounded-4xl font-semibold">Let's Talk</a>
      </div>
    </header>
  );
}
