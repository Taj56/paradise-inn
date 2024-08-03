import DetailsCard from "./ui/DetailsCard";

const luxImg = "src/assets/home_img/acco.png";
const aboutImg = "src/assets/home_img/about_img.png";

const WelcomeCard = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col md:flex-row items-center justify-evenly">

        <div className="w-full flex flex-col items-center justify-center">

          <div className="w-[300px] h-[250px] md:w-[350px] md:h-[300px] flex items-end justify-center bg-center bg-cover mb-1 md:mb-0" style={{backgroundImage: `url(${luxImg})`}}>
              <div className="w-[90%] h-[50px] bg-[#8e8a8aa9] p-2 text-center text-xl rounded-t-lg text-white font-poppins font-[400]">Luxury Accommodations</div>
          </div>

          <DetailsCard />

        </div>

        <div className="w-full flex flex-col items-center justify-center">

          <div className="w-[300px] h-[250px] md:w-[350px] md:h-[300px] flex items-end justify-center bg-center bg-cover mb-1 md:mb-0" style={{backgroundImage: `url(${aboutImg})`}}>
              <div className="w-[70%] h-[50px] bg-[#8e8a8aa9] p-2 text-center text-xl rounded-t-lg text-white font-poppins font-[400]">About Us</div>
          </div>

          <DetailsCard link={'/'}/>

        </div>


    </div>
  )
}
export default WelcomeCard