import { Routes, Route } from "react-router-dom";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

const BASE_PATH = "/react-shopping-cart";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path={BASE_PATH} element={<Home />} />
          <Route path={`${BASE_PATH}/about`} element={<About />} />
          <Route path={`${BASE_PATH}/store`} element={<Store />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
