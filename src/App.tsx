import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Store = lazy(() => import("./pages/Store"));

const BASE_PATH = "/react-shopping-cart";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path={BASE_PATH} element={<Home />} />
          <Route
            path={`${BASE_PATH}/about`}
            element={
              <Suspense fallback="Loading...">
                <About />
              </Suspense>
            }
          />
          <Route
            path={`${BASE_PATH}/store`}
            element={
              <Suspense fallback="Loading...">
                <Store />
              </Suspense>
            }
          />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
