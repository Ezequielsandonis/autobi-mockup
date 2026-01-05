import React from "react";
import { AppRouter } from "./router/AppRouter";
import GlobalToast from "./components/visual/GlobalToast";
import GlobalLoader from "./components/visual/GlobalLoader";
import { ConfirmDialog } from "primereact/confirmdialog";
import { addLocale, locale } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primeicons/primeicons.css";
import "./styles/globals.css";

addLocale("es", {
  firstDayOfWeek: 1,
  dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
  dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
  monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  today: "Hoy",
  clear: "Limpiar",
  chooseDate: "Elegir fecha",
  weekHeader: "Sem"
});

locale("es");

const App: React.FC = () => (
  <>
    <GlobalToast />
    <GlobalLoader />
    <ConfirmDialog />
    <AppRouter />
  </>
);

export default App;
