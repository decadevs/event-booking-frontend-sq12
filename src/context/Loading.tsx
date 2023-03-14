import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingGif from "../assets/ProtectedRoutesImages/Loading.gif";
import { loadingStyles } from "./load";

export function Loading() {
  const loadingClasses = loadingStyles();
  const [count, setCount] = useState(3);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 &&
      navigate(`/login`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={loadingClasses.loadingContainer}>
      <img src={LoadingGif} alt="Loading" style={{ width: "400px" }} />
    </div>
  );
}
