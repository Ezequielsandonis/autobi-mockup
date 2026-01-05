import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
};
