import React, { useState } from "react";
import { useRegisterMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";
import { SignupRequest } from "../types";

const RegisterPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const registerData: SignupRequest = { name: `${firstName} ${lastName}`, email, password, roles: ['employee'] };
      await register(registerData).unwrap();
      navigate("/"); // Redirige a la página principal o login
    } catch (err) {
      console.error("Error en registro:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4 text-brandRed">Registrarse</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input type="text" className="w-full p-2 border rounded" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellido</label>
          <input type="text" className="w-full p-2 border rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input type="password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-brandRed text-white p-2 rounded hover:bg-red-600" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Registrarse"}
        </button>
        {error && <p className="mt-2 text-red-500">Error al registrarse.</p>}
      </form>
      <button onClick={() => navigate("/")} className="absolute top-4 right-4 bg-brandRed text-white p-2 rounded hover:bg-red-500">
        Home
      </button>
    </div>
  );
};

export default RegisterPage;
