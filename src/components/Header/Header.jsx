import React from "react";
import Navbar from "../Navbar/Navbar";
import NavItem from "../NavItem/NavItem";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { BiBellMinus } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai";

function Header({openModal}) {
  return (
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
  );
}

export default Header;