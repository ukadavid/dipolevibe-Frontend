/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaFolder,
  FaBell,
  FaClock,
  FaUser,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    // document.addEventListener("click", clickHandler);
    // return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <span className="text-right font-medium text-sm text-white py-1 px-3 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full">
              Dip{" "}
              <span className="dark:text-blue-200 text-black mx-0.5">olev</span>
              ibe
            </span>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="mt-3">
              {/* Home */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/dashboard" || pathname.includes("dashboard")
                }
              >
                <NavLink to="/dashboard">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    <div className="flex items-center">
                      <FaHome />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Home
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>
              {/* My Library*/}
              <SidebarLinkGroup
                activecondition={pathname.includes("mylibrary")}
              >
                <NavLink to="/mylibrary">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/mylibrary");
                    }}
                  >
                    <div className="flex items-center">
                      <FaFolder />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        My Library
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>

              {/* Notifications */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/notify" || pathname.includes("notify")
                }
              >
                <NavLink to="/notify">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/notify");
                    }}
                  >
                    <div className="flex items-center">
                      <FaBell />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Notifications
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>
              {/* Watch Later */}
              <SidebarLinkGroup
                activecondition={pathname.includes("watchlater")}
              >
                <NavLink to="/watchlater">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/watchlater");
                    }}
                  >
                    <div className="flex items-center">
                      <FaClock />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Watch Later
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
            <ul className="mt-3">
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes("settings")}>
                <NavLink to="/settings">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/settings");
                    }}
                  >
                    <div className="flex items-center">
                      <FaCog />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Settings
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>
              {/* Analytics */}
              <SidebarLinkGroup
                activecondition={pathname.includes("analytics")}
              >
                <NavLink to="/analytics">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      navigate("/analytics");
                    }}
                  >
                    <div className="flex items-center">
                      <FaChartBar />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Analytics
                      </span>
                    </div>
                  </div>
                </NavLink>
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
