import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import { CartProvider, Context } from "./context/Context";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";

import Carrito from "./pages/Carrito";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route
                path="producto/:idProduct"
                element={<ItemDetailContainer />}
              />
              <Route
                path="productos/:idCategory"
                element={<ItemListContainer />}
              />
              <Route path="contacto" element={<Contacto />} />
              <Route path="carrito" element={<Carrito />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
