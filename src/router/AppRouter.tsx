// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";
import { ProtectedRoute } from "../components/layout/ProtectedRoute";
import { LoginPage } from "../features/auth";
import RegisterPage from "../features/auth/pages/RegisterPage";
import { PrivateLayout } from "../components/layout/PrivateLayout";
import { Home } from "../pages/Home";
import { PublicLayout } from "../components/layout/PublicLayout";
import { Dashboard } from "../pages/Dashboard";
import { ProfilePage } from "../features/users";

// import ProfilePage from "../features/users/pages/ProfilePage";

export const AppRouter: React.FC = () => (
  <BrowserRouter basename="/">
    <Routes>
      {/* Rutas públicas sin autenticación */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rutas públicas con Navbar (Landing page) */}
      <Route element={<PublicLayout />}>
        <Route path="/landing" element={<Home />} />
      </Route>

      {/* Rutas protegidas con Navbar y autenticación */}
      <Route element={<PrivateLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
      </Route>

      {/* Ruta 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
