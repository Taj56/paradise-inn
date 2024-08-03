import QuickLinks from "./QuickLinks"
import Welcome from "./Welcome"

const Home = () => {
  return (
    <>
      <section id="home" className="w-full h-screen bg-hero bg-cover bg-center"></section>
      <QuickLinks />
      <Welcome />
    </>
  )
}
export default Home