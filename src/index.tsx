import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { dataAtom } from "./atoms/data-atom";

import { indexRouter } from "./routes/index";

/* let root = createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot
    initializeState={({ set }) => {
      const initialData: any = useInit();
      set(dataAtom, initialData);
    }}
  >
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <RouterProvider router={indexRouter} />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>
); */

let root = createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot
    initializeState={({ set }) => {
      try {
        const savedState = localStorage.getItem("saved-state");
        // Asegurarse de que savedState es un JSON válido antes de parsear
        if (savedState) {
          set(dataAtom, JSON.parse(savedState));
        }
      } catch (error) {
        console.error("Error al inicializar el estado de Recoil: ", error);
        // Si hay un error, no hacer nada y se usa el valor por defecto
      }
    }}
  >
    <React.StrictMode>
      <RouterProvider router={indexRouter} />
    </React.StrictMode>
  </RecoilRoot>
);
