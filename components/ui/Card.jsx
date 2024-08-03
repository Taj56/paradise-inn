/**
 * Render a card component with an image and title.
 *
 * @param {string} img - The URL of the image to display on the card
 * @param {string} title - The title text to display on the card
 * @return {JSX.Element} The card component with the provided image and title
 */

import { Link } from "react-router-dom"


const Card = ({img, title}) => {
  return (
    <Link to={`/`}>
        <div className="md:w-[250px] w-[230px] h-[200px] md:h-[200px] bg-red-600 flex justify-center items-center bg-cover bg-center rounded-md sm:w-[280px] sm:h-[280px]" style={{backgroundImage: `url(${img})`}}>
            <div className="w-full h-[50px] bg-[#ffffff89] flex justify-center items-center" >
                <h2 className="text-black font-medium text-2xl">{title}</h2>
            </div>
      </div>
    </Link>
  )
}
export default Card