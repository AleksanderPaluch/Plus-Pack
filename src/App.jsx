import { lazy } from "react";
import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));



function App() {
  return (
    <div className="bg-zinc-500 h-screen">
      <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </Layout>
    </div>
  )
}

export default App
