import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { server } from "../../Origin";
import axios from "axios";

const Home = () => {
  const [image, setImage] = useState("");

  const handleUploadFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload");
      return;
    }
    const formData = new FormData();
    formData.append("file", image);

    try {
      const res= await axios.post(`${server}/api/diagnose`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data, " resonce.data");
      console.log(res , " responce")

      alert("Image uploaded successfully");
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center">
        <div class="p-[100px]  w-full">
          <h3 className="font-[550] text-[1.5rem] m-5">Upload Image</h3>
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <AiOutlineCloudUpload
                size={25}
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleUploadFile}
              value={image}
            />
          </label>
          <button onClick={handleUpload} className="bg-black">submit</button>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Home;
