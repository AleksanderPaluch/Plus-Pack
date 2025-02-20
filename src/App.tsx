import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";


const About = lazy(() => import("./pages/AboutPage/AboutPage"));
const Products = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const Careeer = lazy(() => import("./pages/CareerPage/CareerPage"));
const Contact = lazy(() => import("./pages/ContactPage/ContactPage"));


const App: React.FC = () => {
  return (
    <>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/careeer" element={<Careeer/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
