import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import {baseURL} from "../utils/config"

interface AuthContextInterface {
  status: string;
  token?: string;
}

const AuthContext = createContext<any | null>(null);
let process: NodeJS.Process;

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({
    status: "",
    token: "",
  });

  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common["Authorization"] = "Bearer" + " " + auth?.token;
  axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsed = JSON.parse(data);
      setAuth({ ...auth, status: parsed.status, token: parsed.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
