import "@/App.css";
import "@/index.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "@/components/home.jsx";
import MyLogin from "@/components/login.jsx";
import Dashboard from "@/components/dashboard.jsx";
import Timeline from "@/components/timeline.jsx";
import Gallery from "@/components/gallery.jsx";
import Graphs from "@/components/graphs.jsx";
import AnnotatedGallery from "@/components/annotatedGallery.jsx";
import ImageViewer from "@/components/imageViewer.jsx";
import SelectCamPage from "@/components/selectCamPage";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<MyLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/gallery/:filter" element={<Gallery />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/annotated" element={<AnnotatedGallery />} />
            <Route path="/imageViewer" element={<ImageViewer />} />
            <Route path="/selectCamPage" element={<SelectCamPage />} />
          </Routes>
        </Router>
        
      </ThemeProvider>
    </>
  );
}

export default App;
