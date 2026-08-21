import Navbar from "@/Component/Navbar/page";
import Hero from "@/Component/Introduction/page";
import Now from "@/Component/Now/page";
import Stats from "@/Component/Stats/page";
import Experience from "@/Component/Experience/page";
import Project from "@/Component/Projects/page";
import Toolkit from "@/Component/Toolkit/page";
import Footer from "@/Component/Footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <Hero />
      <Now />
      <Stats />
      <Experience />
      <Project />
      <Toolkit />
      <Footer />
    </div>
  );
}
