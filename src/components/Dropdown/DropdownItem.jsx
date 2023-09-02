/* eslint-disable react/prop-types */
import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <a
        className="menu-item"
        onClick={() => { 
          props.setActive(props.goToMenu)
          props.setModal(true)
          console.log(props.setCaptureMeetingModal)
        }}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;