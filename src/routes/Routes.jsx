import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route caseSensitive path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
