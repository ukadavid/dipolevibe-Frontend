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

      const response = await apiPost("/User/login", adminLoginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      toast.success(data.message);
      if (data.message === "You are logged in successfully") {
        localStorage.setItem("token", data.email);
        localStorage.setItem("User", "User");
      }
      console.log(data);
      console.log(data.message);

      setTimeout(() => {
        window.location.href = "/dashboard";
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

  /* ==================================== Verify Email with OTP ================================================*/
  const OTPConfig = async (enteredOTP, userId) => {
    try {
      const OTPData = {
        token: enteredOTP,
      };

      let email = userId;

      const response = await apiPost(
        `/user/auth/confirm-email/${email}`,
        OTPData
      );
      console.log(OTPData);
      const data = await response.data;
      if (data.displayMessage === "Success") {
        toast.success(data.result);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.errorMessages[0]);
    }
  };

  /* ==================================== Forgot Password with Email ================================================*/

  const EmailConfig = async (emailData) => {
    try {
      const EmailData = {
        email: emailData.email,
      };
      console.log(EmailData);
      console.log(EmailData.email);

      const response = await apiPost(
        `/user/auth/forgot_password${EmailData.email}`
      );

      console.log(EmailData.otp);
      const data = await response.data;
      if (data.displayMessage === "Success") {
        localStorage.setItem("role", JSON.stringify(data.user.role));
        console.log(data.user.role);
      }
      toast.success(data.result);

      setTimeout(() => {
        window.location.href = "/resetPassword";
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.errorMessages[0]);
    }
  };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        adminRegisterConfig,
        adminLoginConfig,
        userLoginConfig,
        OTPConfig,
        EmailConfig,
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
