import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Legal from "./Pages/Legal/Legal";
import Policy from "./Pages/Policy/Policy";
import Cgu from "./Pages/Cgu/Cgu";
import Error404 from "./Pages/Error404/Error404";
import Doctor from "./Pages/Doctor/Doctor";
import Seo from "./Components/Seo/Seo";

function App() {

  return (
    <BrowserRouter>
    <Seo />
    <ToastContainer />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/docteur/:id" element={<Doctor />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="/rgpd" element={<Policy />} />
      <Route path="/cgu" element={<Cgu />} />
      <Route path="/erreur404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
