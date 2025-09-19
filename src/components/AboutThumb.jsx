import aboutThumb from "../assets/images/aboutThumbImg.png"
export const AboutThumb = () => {
  return (
    <div className="w-full xl:justify-start xl:w-[50%] flex justify-center">
        <div className="h-[500px] xl:w-[450px] 2xl:w-[500px] 2xl:h-[800px] w-[300px] sm:w-[400px] sm:h-[600px] md:h-[700px] md:w-[500px] relative aboutThumb overflow-hidden bg-white rounded-full">
            <img src={aboutThumb} alt="aboutThumb" className="h-full top-[50px] left-1/2 -translate-x-1/2 absolute rounded-full object-top object-cover"/>
        </div>
    </div>
  )
}
