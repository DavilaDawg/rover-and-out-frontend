import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-b-lg shadow-lg">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Rover&Out
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Explore the Martian landscape like never before with our cutting-edge app.
        </p>
        <Button
          className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 rounded-full px-8 py-4 shadow-lg"
          onClick={handleClick}
        >
          Login
        </Button>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-8 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Interactive Timeline</h3>
            <p className="text-gray-300">
              Track the photos taken by the rover on Mars with an interactive timeline.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Photo Gallery</h3>
            <p className="text-gray-300">
              Access a gallery of rover photos taken over the past six months.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">3D Rover Model</h3>
            <p className="text-gray-300">
              View and interact with a 3D model of the rover.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Annotate Images</h3>
            <p className="text-gray-300">
              Click on images to utilize tools for zooming, panning, and annotating. All annotated photos are saved in a separate gallery.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Interactive 3D Map</h3>
            <p className="text-gray-300">
              Explore Mars with an interactive 3D map, allowing users to view where images were taken on the 
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-8">
          About the App
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          The app will feature simple login, sign-up, and log-out functionality, along with an interactive timeline that highlights when photos were taken by a rover on Mars. Users will have access to a gallery containing half a year's worth of photos, and they can click on specific dates within the timeline to view the photos taken on that day, accompanied by a 3D model of the rover. Both the general gallery and the date-specific photo collections will allow users to click on images to utilize tools for zooming, panning, and annotating. All annotated photos will be saved in a separate gallery. Additionally, the app will include a page displaying at least two graphs to visualize relevant data.
        </p>
        <div className="flex justify-center">
          <img className="h-[56rem] w-[56rem] object-cover rounded-lg shadow-lg" src="rover.jpg" alt="Rover" />
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="bg-gray-700 py-12 px-8 md:px-12 mt-12 rounded-lg shadow-lg border border-gray-600">
        <h2 className="text-3xl font-bold text-white mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Feel free to reach out to me via email or use the form below to get in touch. I'm always open to discussing projects, opportunities, or just having a chat!
        </p>
        <form
          action="https://formspree.io/f/your-form-id"  // Replace with your Formspree or other form service endpoint
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 rounded-full px-8 py-4 shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="flex justify-center items-center p-4 bg-gray-800 text-gray-500 border-t border-gray-700">
        <p className="text-sm">
          {new Date().getFullYear()} Rover&Out
        </p>
      </footer>
    </div>
  );
};

export default Home;

