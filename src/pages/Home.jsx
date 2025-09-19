import Hero from "../components/Hero";
import { About } from "./About";
import Services from "./Services";

export default function Home () {
  return (
    <div className="bg-[#F0F5F9] ">
        <Hero/>
        <Services/>
        <About/>
    </div>
  )
}
