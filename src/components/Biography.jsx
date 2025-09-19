import biographyBg from "../assets/images/biographyBg.png"

const Biography = () => {
  return (
    <div className="w-full py-12 px-8 bg-white rounded-xl">
        <div>
            <div className="relative w-[200px] h-[50px]">
                <img src={biographyBg} alt="Biography Background" className="absolute top-1/2 -translate-y-1/2 w-full"/>
                <h2 className="text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#202942]">Biography</h2>
            </div>
            <div className="mt-6 grid grid-rows-4 grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-8 gap-5">
                <div>
                    <h2 className="text-lg font-semibold text-[#202942]">Name</h2>
                    <p className="text-[#666666] mt-1 font-semibold">Rushikesh Rajeshvar Manjre</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-[#202942]">Birthday</h2>
                    <p className="text-[#666666] mt-1 font-semibold">22 Oct, 2004</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-[#202942]">Email</h2>
                    <p className="text-[#666666] mt-1 font-semibold">rushikeshmanjre221004@gmail.com</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-[#202942]">Location</h2>
                    <p className="text-[#666666] mt-1 font-semibold">Hiwra Kd, Maharashtra</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Biography