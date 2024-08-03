import { Link } from "react-router-dom"

const DetailsCard = ({link}) => {
  return (
    <Link className="w-[120px] h-[40px] bg-primary my-1 rounded-sm drop-shadow-lg mb-3 md:mb-0" to={`${link}`}>
        <p className="text-center text-white font-poppins font-[500] p-2 text-xl">Details</p>
    </Link>
  )
}
export default DetailsCard