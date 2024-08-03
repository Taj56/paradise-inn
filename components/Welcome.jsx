import WelcomeCard from "./WelcomeCard"

const Welcome = () => {
  return (
    <section className="w-full min-h-screen p-5">
        <h1 className="md:text-5xl text-2xl sm:text-3xl font-bold text-center font-mako">Welcome To Paradise Inn</h1>

        <div className="w-full p-2 mt-5 ">
            <h2 className="font-poppins font-[600] mb-4 text-xl sm:text-4xl">Location</h2>

            <p className="font-poppins font-[400] md:w-[75%] text-xl ">
            What better slice of paradise can you desire? Paradise Inn is conveniently nestled in the lush green parish of Portland, Jamaica, just five minutes away from Rafter&apos;s Rest where you can enjoy the breath-taking experience of rafting on the Rio Grande. And in the other direction, just ten minutes away you&apos;ll come upon the beautiful Errol Flynn Marina in the historically rich town of Port Antonio.
            </p>
        </div>

        <div className="w-full p-2 mt-5">
            <h2 className="font-poppins font-[600] mb-4 text-xl sm:text-4xl">Adventures to be had</h2>

            <p className="font-poppins font-[400] md:w-[75%] text-xl ">
            The adventure does not stop there! We provide the perfect gateway to other world class attractions such as Somerset Falls, Reach Falls, Boston Beach (Jerk Paradise), Blue Lagoon, Frenchman&apos;s Cove and Winnifred Beach.
            </p>
        </div>

        <div className="w-full p-2 mt-5 mb-10">
            <h2 className="font-poppins font-[600] mb-4 text-xl sm:text-4xl">Nine Guest Rooms</h2>

            <p className="font-poppins font-[400] md:w-[75%] text-xl ">
            Paradise Inn boasts nine luxurious suites with a tranquil atmosphere in a relaxing environment. It&apos;s your home away from home. Take advantage of our 24 hour service which is second to none, courteous staff and the most affordable rates in this hemisphere. You have your choice of air-conditioned rooms complete with kitchenettes, cable TV, hot water, front and back balconies and free WI-FI.
            </p>
        </div>

        <WelcomeCard />

    </section>
  )
}
export default Welcome