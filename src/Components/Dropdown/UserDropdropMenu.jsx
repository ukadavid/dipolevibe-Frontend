import { useState, useEffect } from "react";
import axios from "axios"; // You need to import axios
import DropdownItem from "./DropdownItem";
import "./DropdownMenu.css";

function UserDropdownMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMail, setUserMail] = useState("");

  useEffect(() => {
    // Use useEffect for asynchronous data fetching
    axios({
      method: "GET",
      url: "https://...loading/userMail",
    })
      .then((response) => {
        setUserMail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user mail:", error);
      });
  }, []);

  const setUserStatus = () => {
    if (sessionStorage.getItem("user") === "1") {
      return "LogOut";
    } else {
      return "LogIn";
    }
  };

  return (
    <div>
      <DropdownItem>Hi, User</DropdownItem>
      <DropdownItem>{userMail}</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>{setUserStatus()}</DropdownItem>
    </div>
  );
}

export default UserDropdownMenu;
