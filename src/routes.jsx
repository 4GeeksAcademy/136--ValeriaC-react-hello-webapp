import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Favoritos } from "./pages/Favoritos";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/single/personaje/:theId" element={<Single tipo="personaje" />} />
        <Route path="/single/vehiculo/:theId" element={<Single tipo="vehiculo" />} />
        <Route path="/single/planeta/:theId" element={<Single tipo="planeta" />} />
      </Route>
    )
);