import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getManifestInfo } from "@/services/galleryService";

const Graphs = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [imgsPerDay, setImgsPerDay] = useState([])

  function handleBack() {
    navigate("/dashboard");
  }

  async function get() {
    const result = await getManifestInfo();

    if (result.success) {
      setInfo(result.data.data);
      return result.data.data
    } else {
      console.log("An unexpected error occurred in service.");
      return;
    }
  }

  useEffect(() => {
    get().then((data) => {
      console.log(data)
      setImgsPerDay(data.photos.map((obj) => obj.total_photos))
    });
  }, []);

  const landingDate = info.landing_date;
  const launchDate = info.launch_date;
  const maxSol = info.max_date; // Check significance!
  const totalPhotos = info.total_photos;

  //const photoInfo = info.photos; // Arr of objs
  //console.log(photoInfo)
  //console.log("photoinfo", photoInfo[0].total_photos)
  
  //const imgsPerDay = photoInfo.map((obj) => obj.total_photos)


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

      <div className="flex justify-center items-center p-6">
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Curiosity Rover Details</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-gray-300">Launch Date:</p>
            <p className="text-xl text-white">{launchDate}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-gray-300">Landing Date:</p>
            <p className="text-xl text-white">{landingDate}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-gray-300">Gallery Max Sol:</p>
            <p className="text-xl text-white">{maxSol}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-lg font-semibold text-gray-300">Total Photos:</p>
            <p className="text-xl text-white">{totalPhotos}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center" > 
      <p className = "text-5xl font-bold">Graphs: </p>
      <p>{JSON.stringify(imgsPerDay)}</p>
    </div>

   
    </>
  );
};

export default Graphs;
