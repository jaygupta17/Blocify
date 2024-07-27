"use client";
import { ScanBarcodeIcon } from "lucide-react";
import React, { useState } from "react";

function Profile() {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <div className="h-[100vh] w-full flex justify-center items-center z-100">
      <div className="h-[90vh] w-[50vw] realtive bg-[#1a1818] rounded-sm flex justify-center ">
        <div className="h-full w-[45vw] flex flex-col justify-center items-center gap-2">
          <div className="h-[45vh] w-[45vh] bg-white rounded-sm"></div>
          <div className="h-[35vh] w-[45vh] flex flex-col gap-3">
            <div>
              <input type="file"></input>
              {selectedImage ? (
                <img src={selectedImage} alt="image" />
              ) : (
                <span>Select an image</span>
              )}
            </div>
            <h1 className="font-bold">Upload Image Using AI</h1>
            <button className="bg-white text-black w-[35%] gap-1 flex px-2">
              Generate
              <ScanBarcodeIcon />
            </button>
          </div>
        </div>
        <div className="h-full w-[50vw] bg-black"></div>
      </div>
    </div>
  );
}

export default Profile;
