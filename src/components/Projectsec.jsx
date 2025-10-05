import marketing from "../assets/images/marketing.jpg";
import creative from "../assets/images/creative.jpg";
import design from "../assets/images/design.jpg";
import business from "../assets/images/business.jpg";

const Projectsec = () => {
  const cardData = [
    {
      category: "Marketing",
      title: "Photo shooting and editing",
      imgUrl: marketing,
    },
    {
      category: "Creative",
      title: "Quality in industrial design",
      imgUrl: creative,
    },
    {
      category: "Design",
      title: "Blue business mockup cards",
      imgUrl: design,
    },
    {
      category: "Business",
      title: "Simple black & white design",
      imgUrl: business,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
          RECENT WORK
        </h2>
        <h1 className="text-[35px] lg:text-[50px] md:text-[35px] font-bold text-[#202942]">
          Showcasing My Projects
        </h1>
      </div>
      <div className="grid mt-10 gap-15 lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4">
        {cardData.map((data, index) => (
          <div key={index} className={`h-fit xl:h-[95%] xl:w-[95%] w-full relative z-10 ${index%2 == 0 ? "self-start" : "self-end"}`}>
            <div
              className="w-full h-full overflow-hidden thumb-zoom md:after:absolute md:after:left-0 md:after:bottom-0 
            md:after:content-[''] md:after:h-[40%] md:after:w-full 
            md:after:bg-gradient-to-b md:after:from-black/0 
            md:after:to-black md:after:to-[150%]"
            >
              <img src={data.imgUrl} alt="Marketing Project" className="h-full w-full"/>
            </div>
            <div className="mt-8 xl:w-[400px] lg:w-[250px] md:absolute md:right-10 md:bottom-7  md:pl-12 md:text-right md:z-20 flex flex-col gap-4">
              <button className="w-fit md:self-end h-fit bg-[#28e98c] font-bold px-5 py-1 text-[15px]">
                {data.category}
              </button>
              <div className="w-full mt-4 border-[1px] border-[#28e98c]"></div>
              <h1 className="text-[25px] xl:text-[35px] md:text-white lg:text-[20px] md:text-[35px] font-bold text-[#202942]">
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectsec;
