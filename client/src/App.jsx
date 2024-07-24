import "./App.css";
import './index.css'; 

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider"; 

import Home from "./components/home.jsx";
import Login from "./components/login.jsx";
import Dashboard from "./components/dashboard.jsx";
import Timeline from "./components/timeline.jsx";
import Gallery from "./components/gallery.jsx";
import Graphs from "./components/graphs.jsx";
import AnnotatedGallery from "./components/annotatedGallery.jsx";
import ImageViewer from "./components/imageViewer.jsx";
import DayGallery from "./components/dayGallery.jsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/annotated" element={<AnnotatedGallery />} />
            <Route path="/imageViewer" element={<ImageViewer />} />
            <Route path="/dayGallery" element={<DayGallery />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
