import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./Redux/store";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


