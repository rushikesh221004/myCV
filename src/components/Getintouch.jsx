import { BsFillSendFill } from "react-icons/bs";
const Getintouch = () => {
  return (
    <button className="relative w-fit flex items-center px-10 py-5 lg:py-4 overflow-hidden font-medium transition-all bg-[#28e98c] rounded-md group">
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-300 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-300 rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-[-1px] w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-black rounded-md group-hover:translate-x-0"></span>
      <span className="relative flex items-center gap-3 w-full text-left text-[#202942] font-bold transition-colors duration-200 ease-in-out group-hover:text-white">
        <BsFillSendFill /> Get In Touch
      </span>
    </button>
  );
};

export default Getintouch;
