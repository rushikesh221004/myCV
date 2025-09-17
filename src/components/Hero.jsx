import wavyHand from "../assets/images/wavyHand.png";
import reactImg from "../assets/images/reactImg.png";
import jsImg from "../assets/images/jsImg.png";
import laptopImg from "../assets/images/laptopImg.png";
import myImgOne from "../assets/images/myImgOne.png";
import roundedImg from "../assets/images/roundedImg.png";

const Hero = () => {
  return (
    <div className="bg-[#E3F7EF] xl:bg-[#F0F5F9] px-4 pt-10 2xl:pt-36 md:pt-28">
      <div className="sm:max-w-[500px] border-b-2 xl:pb-36  border-green-400  xl:justify-between md:max-w-[700px] xl:max-w-[1200px] 2xl:max-w-[1300px] xl:flex xl:items-center sm:mx-auto">
        <div className="flex xl:w-[50%] flex-col gap-10">
          <div>
            <h2 className="flex items-center text-[#202942] text-[35px] md:text-[70px] font-bold">
              Hey{" "}
              <img
                src={wavyHand}
                alt="Waving Hand"
                className="h-[65px] waveHand md:ml-4"
              />
              , I'm
            </h2>
            <h2 className="text-[35px] text-[#202942] md:text-[70px] font-bold">
              Rushikesh Manjre
            </h2>
          </div>
          <p className="text-[18px] font-semibold text-[#666666]">
            I'm an aspiring Software Engineer, currently pursuing MCA, and
            dedicated to becoming a Google-level problem solver. Always
            learning, always building.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="w-full px-8 group gap-5 py-8 flex md:w-[200px] hover:cursor-pointer md:h-[200px] justify-center flex-col items-center services overflow-hidden rounded-2xl bg-[#F4FCF9] xl:bg-white">
              <h2 className="text-[#202942] group-hover:text-[#28e98c] text-center text-[18px] font-semibold">
                SERVICES
              </h2>
              <div className="flex w-full border-[1px] md:mt-5 border-[#28e98c] justify-center gap-5 py-4 rounded-full items-center">
                <img
                  src={jsImg}
                  alt="JavaScript"
                  className="h-[50px] w-[50px] md:h-[30px] md:w-[30px]"
                />
                <img
                  src={reactImg}
                  alt="React"
                  className="h-[50px] w-[50px] md:h-[30px] md:w-[30px]"
                />
              </div>
            </div>
            <div className="w-full hover:cursor-pointer group px-8 md:w-[200px] md:h-[200px] justify-center gap-5 py-8 flex flex-col items-center services overflow-hidden rounded-2xl bg-[#F4FCF9] xl:bg-white">
              <h2 className="text-[#202942] group-hover:text-[#28e98c] text-center text-[18px] md:mb-5 font-semibold">
                PROJECTS
              </h2>
              <img src={laptopImg} alt="Laptop" />
            </div>
            <div className="w-full hover:cursor-pointer group md:w-[200px] md:h-[200px] justify-center px-8 py-8 flex flex-col items-center services overflow-hidden rounded-2xl bg-[#F4FCF9] xl:bg-white">
              <h2 className="text-[#202942] group-hover:text-[#28e98c] text-center text-[18px] font-semibold">
                ABOUT
              </h2>
              <h1 className="text-[75px] font-bold text-[#28e98c]">A</h1>
            </div>
          </div>
        </div>

        <div className="h-[250px] xl:self-end xl:w-[40%] 2xl:w-[420px] 2xl:h-[420px] xl:h-[400px] sm:h-[400px] md:h-[500px] xl:mt-0 md:mt-44 sm:mt-56 mt-44 flex items-center justify-center relative rounded-2xl w-[100%] bg-[#28e98c]">
          <img
            src={myImgOne}
            alt="My"
            className="object-cover absolute  left-[50%] z-10  2xl:h-[600px] -translate-x-1/2 bottom-0 h-[400px] sm:h-[580px]"
          />
          <img src={roundedImg} alt="rounded" className="h-[200px] xl:h-[360px] rotate-[60deg] absolute z-0" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
