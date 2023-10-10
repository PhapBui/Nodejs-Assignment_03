import axios from "axios";
import { Image } from "cloudinary-react";
import { useState } from "react";

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "yds5qk24"); // Replace with your Cloudinary upload preset

    // Upload image to Cloudinary
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dsjbcv5xe/image/upload", // Replace with your Cloudinary cloud name
      formData
    );

    // Save image URL to MongoDB
    const imageUrl = response.data.url;
    // Call your Node.js API endpoint to save the image URL to MongoDB
    // Example: axios.post('/api/images', { imageUrl })

    setUploadedImage(imageUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <Image cloudName="your_cloud_name" publicId={uploadedImage} />
        </div>
      )}
    </div>
  );
}

export default MyComponent;
