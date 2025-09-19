import { AboutMe } from "../components/AboutMe"
import { AboutThumb } from "../components/AboutThumb"

export const About = () => {
  return (
    <div className="px-4 xl:px-0 xl:flex xl:justify-between sm:max-w-[500px] md:max-w-[700px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto">
        <AboutThumb/>
        <AboutMe/>
    </div>
  )
}
