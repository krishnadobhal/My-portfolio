import { AccentPicker } from "@/components/ui/accent-picker";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ShaderBackground } from "@/components/ui/icey-night-shards";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <ShaderBackground className="pointer-events-none absolute inset-0 h-full w-full" />

      <div className="relative mx-auto flex min-h-[91vh] max-w-6xl flex-col justify-center px-6 py-24">
        <Eyebrow>Available for work — Gurugram, IN</Eyebrow>

        <h1 className="text-display mt-8 max-w-4xl [overflow-wrap:anywhere]">
          Backend systems
          <br />
          and interfaces
          <br />
          that hold up
          <br />
          <span className="text-amber">under load.</span>
        </h1>
      </div>

      <AccentPicker className="absolute bottom-6 right-6 z-10" />
    </section>
  );
}
