import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeText from "@/components/MarqueeText";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeText />
        <Experience />
        <MarqueeText />
        <Projects />
        <MarqueeText />
      </main>
    </>
  );
}
