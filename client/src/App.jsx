import "@/App.css";
import "@/index.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "@/components/home.jsx";
import MyLogin from "@/components/login.jsx";
import Dashboard from "@/components/dashboard.jsx";
import Map from "@/components/map.jsx";
import Gallery from "@/components/gallery.jsx";
import Graphs from "@/components/graphs.jsx";
import AnnotatedGallery from "@/components/annotatedGall.jsx";
import ImageViewer from "@/components/imageViewer.jsx";
import SelectCamPage from "@/components/selectCamPage";
import BoringGallery from "./components/boringGallery";
import GallDash from "./components/gallDash";
import MapGall from "./components/mapGall";
import Favorites from "./components/favorites";

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
            <Route path="/map" element={<Map />} />
            <Route path="/gallery/:camToFilter" element={<Gallery />} /> {/* Param has to be the same as the one defined by useParams! */}
            <Route path="/boringGallery" element={<BoringGallery />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/annotated" element={<AnnotatedGallery />} />
            <Route path="/imageViewer" element={<ImageViewer />} />
            <Route path="/selectCamPage" element={<SelectCamPage />} />
            <Route path="/gallDash" element={<GallDash />} />
            <Route path="/mapGall/:selectedLocation" element={<MapGall />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
