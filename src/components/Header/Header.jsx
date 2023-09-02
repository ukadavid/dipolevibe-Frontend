import React from "react";
import Navbar from "../Navbar/Navbar";
import NavItem from "../NavItem/NavItem";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { IconContext } from "react-icons";
import { BiBellMinus } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai";

function Header({openModal}) {
  return (
    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
      <div className="App">
      <Navbar>
        <NavItem icon={<BiBellMinus />} >
          <DropdownMenu openModal={openModal}/>
        </NavItem>
        <NavItem icon={<AiOutlinePlusCircle />}>
          <DropdownMenu />
        </NavItem>
       </Navbar>
       </div>
    </IconContext.Provider>
    
  );
}

export default Header;