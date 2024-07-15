// /pages/about.tsx
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function About() {
  return (
    <main className="relative bg-[#ffffff] flex justify-center overflow-hidden items-center flex-col 
     mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section id="about" className="my-10">
          <h1>About Us</h1>
          <p>Welcome to the About page!</p>
        </section>
        <Footer />
      </div>
    </main>
  );
}
