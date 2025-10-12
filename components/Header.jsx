export default function Header() {
  return (
    <header className="text-white">
      <div className="max-width flex items-center justify-between h-20 -mb-20 relative z-50">
        <a href="#" className="text-3xl font-bold">
          Zohaib<span className="text-[#31F900]">.</span>
        </a>
        <nav className="space-x-10 text-lg">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <a
          href="#"
          className="btn bg-[#31F900] text-black"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
