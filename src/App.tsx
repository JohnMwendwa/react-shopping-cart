import { Routes, Route } from "react-router-dom";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
