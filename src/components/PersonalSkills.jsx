import biographyBg from "../assets/images/biographyBg.png";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { PiGraph } from "react-icons/pi";
const PersonalSkills = () => {
  const personalSkills = [
    {
      skill: "Java (Core & OOP Concepts)",
      percentage: "80%",
      icon: <FaJava className="text-white text-4xl font-extrabold" />,
      bgColor: "#FB503B",
    },
    {
      skill: "JavaScript (ES6+)",
      percentage: "85%",
      icon: <TbBrandJavascript className="text-white text-4xl font-extrabold" />,
      bgColor: "#F7DF1E",
    },
    {
      skill: "React.js / Next.js",
      percentage: "90%",
      icon: <IoLogoReact className="text-white text-4xl font-extrabold" />,
      bgColor: "#61DBFB",
    },
    {
      skill: "Node.js & Express.js",
      percentage: "80%",
      icon: <FaNodeJs className="text-white text-4xl font-extrabold" />,
        bgColor: "#43f52f",
    },
    {
      skill: "Database (MySQL, PostgreSQL & MongoDB)",
      percentage: "75%",
      icon: <FiDatabase className="text-white text-4xl font-extrabold" />,
      bgColor: "#032e91",
    },
    {
      skill: "Data Structures & Algorithms (Java)",
      percentage: "70%",
      icon: <PiGraph className="text-white text-4xl font-extrabold" />,
      bgColor: "#db3e00",
    },
  ];
  return (
    <div className="w-full py-12 mt-5 px-8 bg-white rounded-xl">
      <div>
        <div className="relative w-[270px] h-[50px]">
          <img
            src={biographyBg}
            alt="Biography Background"
            className="absolute top-1/2 -translate-y-1/2 w-full"
          />
          <h2 className="text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#202942]">
            Personal Skills
          </h2>
        </div>
        <div className="mt-12 grid gap-8">
          {personalSkills.map((items, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex w-fit h-fit items-center p-5 rounded-full justify-center" style={{ backgroundColor: items.bgColor }}>
                {items.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#202942]">{items.percentage}</h2>
                <p className="text-[#666666] mt-1 text-lg font-semibold">
                  {items.skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSkills;
