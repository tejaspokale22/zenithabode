import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import AboutUsBanner from "@/components/AboutUsBanner";

export default function About() {
  return (
    <>
      <AboutUsBanner/>
      <Projects />
      <Team />
      <Blog/>
    </>
  );
}
