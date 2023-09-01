import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";

const DropdownMenu = ({openModal}) => {
  // state for csstransition
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"settings"}
            setActive={setActive}
            setModal={openModal} 
          >
            Add to live meeting
          </DropdownItem>
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"settings"}
            setActive={setActive}
          >
            Schedule new meeting
          </DropdownItem>
          <DropdownItem 
            leftIcon={<HiOutlineCog />} 
            goToMenu="animals" 
            setActive={setActive}
          >
            Record video
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;