import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/visual/Button";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      {/* <img src={jjLogo} alt="Broken Link" className="w-40 h-40 mb-6" /> */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Ups, página no encontrada</h1>
      <p className="text-lg text-gray-600 mb-6">Parece que la página que estás buscando no existe o el enlace está roto.</p>

      <Button onClick={handleSubmit} label=" Volver al inicio" />
    </div>
  );
};

export default NotFound;
