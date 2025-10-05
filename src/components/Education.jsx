import biographyBg from "../assets/images/biographyBg.png"

const Education = () => {
    
  return (
    <div className="w-full py-12 mt-5 px-8 bg-white rounded-xl">
        <div>
            <div className="relative w-[200px] h-[50px]">
                <img src={biographyBg} alt="Biography Background" className="absolute top-1/2 -translate-y-1/2 w-full"/>
                <h2 className="text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#202942]">Education</h2>
            </div>
            
        </div>

        <div className="mt-10">
            <div className="flex flex-col gap-3 relative border-l-[1px] border-[#28E98C] w-full pl-8">
                <div className="absolute h-[20px] w-[20px] bg-white border-2 border-[#28E98C] rounded-full left-[-10px] top-[4px]"></div>
                <h2 className="text-[#202942] text-lg font-semibold">BCA – Bachelor of Computer Applications</h2>
                <p className="text-[#28e98c] text-[16px] font-bold">G. S. Science, Arts & Commerce College, Khamgaon</p>
                <h3 className="text-[#202942] text-lg font-semibold text-[18px]">2022 - 2025</h3>
                <p className="text-[#666666] font-semibold text-[16px]">Learned Java, JavaScript, DBMS, and built academic projects like AI-Powered Smart Job Portal.</p>
            </div>

            <div className="flex relative pt-10 flex-col gap-3 border-l-[1px] border-[#28E98C] w-full pl-8">
                <div className="absolute h-[20px] w-[20px] bg-white border-2 border-[#28E98C] rounded-full left-[-10px] top-[45px]"></div>
                <h2 className="text-[#202942] text-lg font-semibold">MCA – Master of Computer Applications</h2>
                <p className="text-[#28e98c] text-[16px] font-bold">Chandigarh University</p>
                <h3 className="text-[#202942] text-lg font-semibold text-[18px]">2025 - 2027</h3>
                <p className="text-[#666666] font-semibold text-[16px]">Studying Advanced Database Management Systems, Networks, Security, Python, Web Programming.</p>
            </div>
        </div>
    </div>
  )
}

export default Education