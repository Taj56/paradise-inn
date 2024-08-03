import Card from "./ui/Card";

const roomsCardGB = "src/assets/home_img/rooms_card.png";
const aboutCardGB = "src/assets/home_img/about_card.png";
const galleryCardGB = "src/assets/home_img/gallery_card.png";


const QuickLinks = () => {
  return (
    <section className="w-full h-[100vh] md:h-[350px] bg-primary flex flex-col md:flex-row  justify-evenly items-center">
        <Card img={roomsCardGB} title="Rooms"/>
        <Card img={aboutCardGB} title="About"/>
        <Card img={galleryCardGB} title="Gallery"/>
    </section>
  )
}
export default QuickLinks