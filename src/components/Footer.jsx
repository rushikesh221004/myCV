import callDark from "../assets/images/callDark.png";
import ContactForm from "./ContactForm";
export default function Footer() {
  return (
    <div id="contact" className="sm:max-w-[500px] lg:flex  contact mt-20 py-20 px-4 w-full md:max-w-[700px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto">
      <div className="w-full">
        <h2 className="text-4xl sm:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
          Let's Talk
        </h2>
        <div className="flex mt-5 items-center gap-4">
          <img src={callDark} alt="Call Icon" className="h-12" />
          <a
            href="tel:+918459976027"
            className="text-2xl font-bold text-[#202942]"
          >
            +91 845 997 6027
          </a>
        </div>
        <div className="flex flex-col gap-8 mt-10">
          <div className="flex flex-col gap-2">
            <p className="text-[#202942] text-xl font-semibold">Location</p>
            <p className="text-[#666666] font-semibold">
              Hiwara Khurd, dist. Buldhana, <br /> Maharashtra, India 444306
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#202942] text-xl font-semibold">Official Email</p>
            <p className="text-[#666666] font-semibold">
              rushikeshmanjre221004@gmail.com
            </p>
          </div>
          <p className="text-[#666666] font-semibold">  
            © 2025 Rishi. All Rights Reserved        
            </p>
        </div>
      </div>
      <div className="mt-20">
        <ContactForm/>
      </div>
    </div>
  );
}
