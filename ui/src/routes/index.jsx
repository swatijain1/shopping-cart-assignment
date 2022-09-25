import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PAGE_URL } from "../constants";
import { Home, Login, Register, ProductListing } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGE_URL.HOME} element={<Home />} />
        <Route path={PAGE_URL.PRODUCT_LIST} element={<ProductListing />} />
        <Route path={PAGE_URL.SIGN_IN} element={<Login />} />
        <Route path={PAGE_URL.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
