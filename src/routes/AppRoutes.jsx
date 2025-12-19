import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Info from "../pages/Info";
import CourseDetail from "../pages/CourseDetail";
import ScrollTop from "../components/ScrollTop";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />

          <Route path="/course/:id" element={<CourseDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
