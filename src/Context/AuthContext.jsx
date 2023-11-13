import React, { createContext } from "react";
import { apiPost } from "./Api/Axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

/**=================Video Data =================================== */

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  /**=================Registration =================================== */

  const registerConfig = async (formData) => {
    try {
      const registerData = {
        email: formData.email,
        password: formData.password,
      };

      console.log(registerData);

      const response = await apiPost("/User/register", registerData);
      const data = await response.data;
      toast.success(data);
      setTimeout(() => {
        window.location.href = "/success";
      }, 2000);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  /**=================User Login =================================== */
  const userLoginConfig = async (formData) => {
    try {
      const userLoginData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await apiPost("/User/login", userLoginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      console.log(data.email);
      toast.success(data.message);

      if (data.message === "You are logged in successfully") {
        localStorage.setItem("email", data.email);
        localStorage.setItem("User", "User");
      }
      console.log(data);
      console.log(data.message);

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  /* ==================================== Forgot Password with Email ================================================*/

  const EmailResetConfig = async (emailData) => {
    try {
      const EmailData = {
        email: emailData.email,
      };
      console.log(EmailData);
      console.log(EmailData.email);

      const response = await apiPost(
        `/User/forgot-password?email=${EmailData.email}`
      );

      const data = await response.data;
      toast.success(data);
      setTimeout(() => {
        window.location.href = "/verifyPassword";
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.errorMessages[0]);
    }
  };
  /* ==================================== Forgot Password with password and confirm Password ================================================*/

  const PasswordResetConfig = async (formData) => {
    try {
      const ResetData = {
        password: formData.email,
        confirmPassword: formData.confirmPassword,
        locate: formData.locate.replace(/\?.*?=/, ""),
      };

      console.log(ResetData.locate);
      const response = await apiPost(
        `/User/reset-password?Token=${ResetData.locate}&Password=${ResetData.password}&ConfirmPassword=${ResetData.confirmPassword}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.data;
      toast.success(data);
      setTimeout(() => {
        window.location.href = "/successReset";
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data);
    }
  };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        userLoginConfig,
        EmailResetConfig,
        PasswordResetConfig,
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
