import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section>
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="max-width relative z-10 pt-40 flex gap-10">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
