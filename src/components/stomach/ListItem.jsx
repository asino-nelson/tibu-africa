import PropTypes from "prop-types";

const ListItem = (props) => {
  return (
    <li className="flex items-center">
      <span className="inline-block h-4 w-4 rounded-full border-gray-700 mr-2"></span>
      <span>{props.label}</span>
    </li>
  );
};

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ListItem;
