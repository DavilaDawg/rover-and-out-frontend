import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { BallTriangle } from "react-loader-spinner";
import { getManifestInfo } from "@/services/galleryService";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [imgsPerDay, setImgsPerDay] = useState([]); // Arr of objs
  const [loading, setLoading] = useState(true);

  function handleBack() {
    navigate("/dashboard");
  }

  async function fetchData() {
    try {
      const result = await getManifestInfo();
      setLoading(!true);
      if (result.success) {
        const data = result.data.data;
        setInfo(data);
        setImgsPerDay(
          data.photos.map((photo) => ({
            sol: photo.sol,
            total_photos: photo.total_photos,
          }))
        );
      } else {
        console.log("An unexpected error occurred in service");
      }
    } catch (error) {
      console.log("Caught: ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const landingDate = info.landing_date;
  const launchDate = info.launch_date;
  const maxSol = info.max_sol; 
  const totalPhotos = info.total_photos;

  const chartData = {
    labels: imgsPerDay.map((item) => `Sol ${item.sol}`),
    datasets: [
      {
        label: "Total Photos per Sol",
        data: imgsPerDay.map((item) => item.total_photos),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
      <div>
        <Button
          className="absolute top-4 right-1 bg-gray-800 text-white px-7 py-5 rounded mr-5"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>

      <div className="relative flex justify-center items-center mt-10">
        {loading && (
          <div className="absolute flex items-center justify-center w-full h-full">
            <BallTriangle />
          </div>
        )}

        <div className="w-full max-w-screen-4xl h-[1000px] ml-60 mt-10">
          <Bar data={chartData} />
        </div>
      </div>

      <div className="flex justify-center items-center p-6 mt-10 pb-20">
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">
            Curiosity Rover Details
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Launch Date:
              </p>
              <p className="text-xl text-white">{launchDate}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Landing Date:
              </p>
              <p className="text-xl text-white">{landingDate}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Journey Duration:
              </p>
              <p className="text-xl text-white">8 months and 11 days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Gallery Max Sol:
              </p>
              <p className="text-xl text-white">{maxSol}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Total Photos:
              </p>
              <p className="text-xl text-white">{totalPhotos}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-300">
                Distance traveled:
              </p>
              <p className="text-xl text-white">19.96 miles / 32.12 km </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphs;
