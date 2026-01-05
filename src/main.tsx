import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

// import "react-notifications/lib/notifications.css";
// import "react-notifications-component/dist/theme.css";





import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
