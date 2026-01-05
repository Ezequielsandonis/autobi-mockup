import React, { useState, useRef } from "react";
import { useLoginMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";
import { useLazyGetUserByEmailQuery } from "../../users";
import { useAppDispatch } from "../../../app/hooks";
import { showToast } from "../../ui/uiSlice";
import { AuthResponse, LoginRequest } from "../types";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { Toast } from "primereact/toast";

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const toast = useRef<Toast>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const [triggerGetUserByEmail] = useLazyGetUserByEmailQuery();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email || !password) {
      toast.current?.show({
        severity: "warn",
        summary: "Campos Requeridos",
        detail: "Por favor, completa todos los campos",
        life: 3000,
      });
      return;
    }

    login({ email, password })
      .unwrap()
      .then((data: AuthResponse) => {
        // Toast de éxito al iniciar sesión
        toast.current?.show({
          severity: "success",
          summary: "¡Bienvenido!",
          detail: data.message || "Inicio de sesión exitoso",
          life: 2000,
        });

        // Llamamos al endpoint para obtener el perfil del usuario
        triggerGetUserByEmail(email)
          .unwrap()
          .then((profile: any) => {
            // Navegar después de obtener el perfil
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
          })
          .catch((err: any) => {
            toast.current?.show({
              severity: "error",
              summary: "Error",
              detail: "No se pudo obtener el perfil del usuario",
              life: 4000,
            });
          });
      })
      .catch((err) => {
        console.error("Error en login:", err);
        const data = (err?.data as AuthResponse) || { message: "Error al iniciar sesión" };

        toast.current?.show({
          severity: "error",
          summary: "Error de Autenticación",
          detail: data.message || "Credenciales incorrectas",
          life: 4000,
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Toast ref={toast} />

      <div className="w-full max-w-md px-4">
        <Card className="shadow-lg">
          {/* Logo/Header */}
          <div className="text-center mb-6">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg">
                <i className="pi pi-heart-fill text-white text-4xl"></i>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-600">
              Accede a tu planificador nutricional
            </p>
          </div>

          {/* Error general */}
          {error && (
            <Message
              severity="error"
              text="Error al conectar con el servidor. Por favor, intenta nuevamente."
              className="mb-4 w-full"
            />
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                <i className="pi pi-envelope mr-2" />
                Correo Electrónico
              </label>
              <InputText
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full"
                disabled={isLoading}
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-gray-700">
                <i className="pi pi-lock mr-2" />
                Contraseña
              </label>
              <Password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                toggleMask
                feedback={false}
                disabled={isLoading}
                autoComplete="current-password"
                className="w-full"
                inputClassName="w-full"
              />
            </div>

            {/* Botón Submit */}
            <Button
              type="submit"
              label={isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              icon={isLoading ? "pi pi-spin pi-spinner" : "pi pi-sign-in"}
              className="w-full p-button-lg"
              loading={isLoading}
              disabled={isLoading}
            />
          </form>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t">
            <div className="text-center mb-3">
              <p className="text-sm text-gray-600">
                ¿Olvidaste tu contraseña?{" "}
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.current?.show({
                      severity: "info",
                      summary: "Contacta al administrador",
                      detail: "Por favor, contacta al administrador del sistema",
                      life: 3000,
                    });
                  }}
                >
                  Contacta al administrador
                </a>
              </p>
            </div>
            {/* <div className="text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Regístrate aquí
                </button>
              </p>
            </div> */}
          </div>
        </Card>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FitTracker - Tu salud, tu control
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

