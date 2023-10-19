import { categoryApi } from "@/api/categoryApi";
import { useState } from "react";

const AddEditCategory = () => {
  const [images, setImages] = useState();
  const handleInputChange = async (e) => {
    setImages(e.target.files);
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    const res = await categoryApi.createNewCategory(formData);
    console.log(res);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="file"
        accept="image/*"
        name="images"
        multiple
        onChange={handleInputChange}
      />
      <input type="submit" value="up" />
    </form>
  );
};

export default AddEditCategory;
