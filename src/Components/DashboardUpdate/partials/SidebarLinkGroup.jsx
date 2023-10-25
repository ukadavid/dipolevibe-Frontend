// SidebarLinkGroup.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

SidebarLinkGroup.propTypes = {
  children: PropTypes.node.isRequired,
  activecondition: PropTypes.bool.isRequired,
};

function SidebarLinkGroup({ children, activecondition }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
    navigate(children.props.to);
  };

  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        activecondition && "bg-slate-900"
      }`}
    >
      <NavLink
        to={children.props.to}
        className={`block text-slate-200 truncate transition duration-150 ${
          activecondition ? "hover:text-slate-200" : "hover:text-white"
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        {children.props.children}
      </NavLink>
    </li>
  );
}

export default SidebarLinkGroup;
