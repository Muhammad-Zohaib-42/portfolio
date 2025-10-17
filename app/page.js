import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeText from "@/components/MarqueeText";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeText />
        <Experience />
        <MarqueeText />
      </main>
    </>
  );
}
