import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
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
      <Route path="/doctor/:id" element={<Doctor />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
