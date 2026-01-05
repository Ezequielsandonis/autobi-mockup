import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puerto para desarrollo (npm run dev)
    strictPort: false, // Si el puerto está ocupado, usa el siguiente disponible
    open: true, // Abre el navegador automáticamente
  },
  preview: {
    port: 3000, // Puerto para preview después del build (npm run preview)
    strictPort: false,
    open: true,
  },
});
