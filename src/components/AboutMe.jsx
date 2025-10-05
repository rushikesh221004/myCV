import { GoDownload } from "react-icons/go";
import Biography from "./Biography";
import PersonalSkills from "./PersonalSkills";
import Education from "./Education";
export const AboutMe = () => {
  return (
    <div className="my-16 xl:my-0 xl:mt-10 xl:w-[50%]">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
          ABOUT ME
        </h2>
        <h1 className="text-[35px] w-[280px] lg:w-[400px] lg:text-[50px] md:text-[35px] font-bold text-[#202942]">
          I can develop that help people
        </h1>
        <p className="text-[#9d9d9d] font-bold">
          As a passionate MCA student and aspiring software engineer, I’m
          building my journey step by step. My focus is on mastering data
          structures, algorithms, and full-stack development to become a strong
          contributor in the tech industry.
        </p>

        <button
          className="bg-white mt-5 text-center w-56 px-1 overflow-hidden rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute top-[4px] group-hover:w-[215px] z-10 duration-500">
            <GoDownload className="font-bold text-2xl" />
          </div>
          <p className="translate-x-5">Download CV</p>
        </button>

        <Biography/>
        <PersonalSkills/>
        <Education/>
      </div>
    </div>
  );
};
