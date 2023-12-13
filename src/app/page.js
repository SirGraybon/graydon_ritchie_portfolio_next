import About from "./components/About";
import Navbar from "./components/Navbar";
import SkillsList from "./components/SkillsList";
export default function Home() {
  return (
    <main >
      <Navbar />
      <About />
      <SkillsList/>
    </main>
  );
}
