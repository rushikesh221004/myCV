import webDesign from "../assets/images/webDesign.png";
import appDevelopment from "../assets/images/appDevelopment.png";
import camera from "../assets/images/camera.png";
import { TfiArrowTopRight } from "react-icons/tfi";
const Services = () => {
  const services = [
    {
      img: webDesign,
      title: "Website design",
      des: "Crafting visually appealing and functional website designs that help businesses grow online.",
      projects: 28,
    },
    {
      img: appDevelopment,
      title: "App Development",
      des: "Building robust mobile and web apps tailored to your business needs with clean code, modern UI, and seamless performance.",
      projects: "1K",
    },
    {
      img: camera,
      title: "UX/UI Design",
      des: "Designing intuitive, user-friendly interfaces with a focus on modern design principles and seamless user experience.",
      projects: 74,
    },
  ];
  return (
    <div className="px-4 py-20 w-full bg-[#F0F5F9] ">
      <div className="flex flex-col sm:max-w-[500px] mx-auto md:max-w-[700px] xl:max-w-[1200px] 2xl:max-w-[1300px] gap-1">
        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
          WHAT I DO
        </h2>
        <h1 className="text-[30px] lg:text-[50px] md:text-[35px] font-bold text-[#202942]">
          My Specializations
        </h1>
        <div className="mt-10 grid gap-10 grid-row-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="services bg-white rounded-lg py-15 px-10"
            >
              <div>
                <img
                  src={service.img}
                  alt="Web Design"
                  className="h-[80px] w-[80px]"
                />
              </div>
              <div className="mt-12">
                <h1 className="text-xl font-bold text-[#202942]">
                  {service.title}
                </h1>
                <p className="text-[16px] font-semibold pb-10 text-[#a6a6a6] mt-5">
                  {service.des}
                </p>
                <div className="flex pt-10 border-t-[1px] border-gray-300 items-center justify-between">
                  <p className="text-xl font-bold text-[#666666]">
                    {service.projects} PROJECTS
                  </p>
                  <TfiArrowTopRight className="text-2xl font-bold text-[#666666]" />
                </div>
              </div>
            </div>
          ))}
           <div
              className="services hidden md:flex relative bg-white rounded-lg"
            >
              <div className="w-[50%] h-[100%] bg-[#E4F8F0]"></div>
              <div className="w-[50%] h-[100%] bg-[#E6EAEE]"></div>
              <h1 className="absolute underline text-[100px] font-bold text-[#28E98C] whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                HIRE ME
              </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
