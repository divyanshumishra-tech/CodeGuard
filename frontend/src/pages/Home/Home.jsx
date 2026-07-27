import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Workflow from "../../components/home/Workflow";
import TechStack from "../../components/home/TechStack";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <TechStack />
      <CTA />
      <Footer />
    </>
  );
}