import GoToTop from "./GoToTop";
import HeaderBtn from "./HeaderBtn";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header id="top" className="text-white mb-3 md:mb-0">
      <div className="max-width flex items-center justify-between h-16 md:h-20 mb-0 md:-mb-20 relative z-30">
        <HeaderTitle />
        <HeaderNav />
        <HeaderBtn />
        <MobileMenu />
        <GoToTop />
      </div>
    </header>
  );
}
