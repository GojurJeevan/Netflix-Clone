import { useEffect } from "react";
import "./Display.css";
import { useNavigate } from "react-router-dom";

export const Dispaly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="screen">
        <div className="zoom">M</div>
      </div>
    </>
  );
};
