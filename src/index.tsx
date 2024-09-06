import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
/* import { emptyData, useInit } from "./hooks/useState.js"; */

import { indexRouter } from "./routes/index";

let root = createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <RouterProvider router={indexRouter} />
      </React.StrictMode>
    </Suspense>
  </RecoilRoot>
);
