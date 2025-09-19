import biographyBg from "../assets/images/biographyBg.png"

const Biography = () => {
    const biography = [
        {
            field: "Name",
            value: "Rushikesh Rajeshvar Manjre"
        },
        {
            field: "Birthday",
            value: "22 Oct, 2004"
        },
        {
            field: "Email",
            value: "rushikeshmanjre221004@gmail.com"
        },
        {
            field: "Location",
            value: "Hiwra Kd, Maharashtra"
        }
    ]
  return (
    <div className="w-full py-12 mt-5 px-8 bg-white rounded-xl">
        <div>
            <div className="relative w-[200px] h-[50px]">
                <img src={biographyBg} alt="Biography Background" className="absolute top-1/2 -translate-y-1/2 w-full"/>
                <h2 className="text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#202942]">Biography</h2>
            </div>
            <div className="mt-6 grid grid-rows-4 grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:gap-8 gap-5">
               {biography.map((item, index) => (
                 <div key={index}>
                    <h2 className="text-lg font-semibold text-[#202942]">{item.field}</h2>
                    <p className="text-[#666666] mt-1 font-semibold">{item.value}</p>
                </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Biography