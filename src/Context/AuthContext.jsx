import React, { createContext } from "react";

import { toast } from "react-toastify";
import { apiPost } from "./Api/Axios";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  /**=================Registration =================================== */

  const registerConfig = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      
      console.log(registerData)
      const response = await apiPost("/user/auth/register", registerData);
      const data = await response.data;
      console.log(data);
      toast.success(data.displayMessage);

      setTimeout(() => {
        const userEmail = data.user.email;
        window.location.href = `/login=${userEmail}`;
        // window.location.href = `/tokenVerify?userId=${userEmail}`;
  
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.errorMessages[0]);
    }
  };

  /**=================Admin Signup=================================== */
  const adminRegisterConfig = async (formData) => {
    try {
      const adminSignupData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await apiPost("/admin/register", adminSignupData);
      const data = await response.data;
      if (data.message === "Admin created successfully") {
        localStorage.setItem("token", data.token);
      }
      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  /**=================Admin Login =================================== */
  const adminLoginConfig = async (formData) => {
    try {
      const adminLoginData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await apiPost("/admin/login", adminLoginData);
      const data = await response.data;
      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userid", JSON.stringify(data.admin._id));
      }
      console.log(data);
      console.log(data.message);
      toast.success(data.message);

      setTimeout(() => {
        window.location.href = "/adminDashboard";
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

    /**=================User Login =================================== */
    const userLoginConfig = async (formData) => {
      try {
        const userLoginData = {
          email: formData.email,
          password: formData.password,
        };
  
        const response = await apiPost("/user/auth/login", userLoginData);
        const data = await response.data;
        if (data.displayMessage === "Successfully login") {
          localStorage.setItem("token", data.result.jwt);
          // localStorage.setItem("userid", JSON.stringify(data.user._id));
        }
        console.log(data.result.jwt);
        
        toast.success(data.displayMessage);
  
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      } catch (error) {
        toast.error(error.response.data.errorMessages[0]);
      }
    };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        adminRegisterConfig,
        adminLoginConfig,
        userLoginConfig
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = React.useContext(dataContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a DataProvider");
  }
  return context;
};

export default DataProvider;