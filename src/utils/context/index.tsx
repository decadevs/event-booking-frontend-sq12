import { AnyLengthString } from "aws-sdk/clients/comprehend";
import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { apiPost } from "../api";
import { login_url, signup_url } from '../config';
import "react-toastify/dist/ReactToastify.css";

export const BookrContext = createContext<{} | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState({});
  const { setItem, getItem, removeItem } = useLocalStorage();
  
  /**======================= Login Method ============================= */
  const loginConfig = async (email: string, password: string) => {
    try {
      const loginData = { email: email, password: password };
      console.log('Base_url', login_url)
      const resp = await apiPost(login_url, loginData);
      console.log(resp)

      if (resp) {
        toast.success(resp?.data?.status);
        setItem("token", resp.data.token);
        console.log(resp)

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

   /**======================= Signup Method ============================= */
   const registerConfig = async (registerData: Record<string, any>) => {
    try {
      const signupData = { email: registerData.email, password: registerData.password };

      const resp = await apiPost(signup_url, signupData);

      if (resp) {
        toast.success(resp?.data?.status);
        setItem("token", resp.data.token);

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <BookrContext.Provider
      value={{
        state,
        loginConfig,
        registerConfig,
      }}
    >
      {children}
    </BookrContext.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(BookrContext);
  if (!context) {
    throw new Error("useContextProvider must be used within a contextProvider");
  }
  return context;
};
