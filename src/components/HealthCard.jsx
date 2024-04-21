import { GiHeartPlus } from "react-icons/gi"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const HealthCard = (props) => {
  return (
    <div>
      <div className="group flex items-center justify-between border py-2 pl-6 pr-4 cursor-pointer rounded-lg">
        <div className="bg-gray-200 rounded-full p-3 border-2 group-hover:border-2 group-hover:border-orange-500 transition ease-in-out">
            <GiHeartPlus size={20}/>
        </div>
        <Link to={props.page} className="text-lg">
            {props.name}
        </Link>
        <MdKeyboardArrowRight className="group-hover:text-orange-600" size={24}/>
      </div>
    </div>
  )
}

HealthCard.propTypes = {
    page: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };


export default HealthCard
