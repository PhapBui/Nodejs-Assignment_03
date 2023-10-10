import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { generateBase64FromImage } from "../../../utils/generatorBase64Image";
import { useEffect, useState } from "react";
import { InputField } from "../formField/InputField";
import { SelectField } from "../formField/SelectField";

const productSchema = yup.object().shape({
  name: yup.string().required("Please enter product name"),
  price: yup
    .number("Quantity must be numberic")
    .min(0, "Minimum price is 0")
    .required("Please enter product price"),
  category: yup.string().required("You must be choose a category"),
  images: yup.mixed().test("required", "Please select a file", (files) => {
    if (files) return true;
    return false;
  }),
  short_desc: yup.string().required("Please enter product short description"),
  long_desc: yup.string().required("Please enter product long description"),
  quantity: yup
    .number("Quantity must be numberic")
    .min(0, "Minimum quantity is 0")
    .required("Please enter product quantity"),
});

const FormProduct = () => {
  // init hook form
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(productSchema) });

  const [imgUrls, setImgUrls] = useState([]);

  const handlerFormSubmit = (data) => {
    console.log(data);
  };

  const handlerOnchange = async (files) => {
    let images = [];
    let urls = [];
    try {
      if (files.length > 0) {
        const l = files.length;
        if (l < 5)
          setError("images", { type: "minLength", message: "Nhap 5 file" });
        for (let i = 0; i < l; i++) {
          const image = await generateBase64FromImage(files[i]);
          const url = URL.createObjectURL(files[i]);
          urls.push(url);
          images.push(image);
        }
        setImgUrls(urls);
        return images;
      }
      throw new Error("Please upload image");
    } catch (error) {
      console.log(error);
    }
  };

  // remove preview URL
  useEffect(() => {
    if (!imgUrls && !(imgUrls.length > 0)) return;
    return () => {
      imgUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [imgUrls]);
  console.log(errors);
  return (
    <Box component="form" onSubmit={handleSubmit(handlerFormSubmit)}>
      {/* Product Name */}
      <FormControl fullWidth>
        <FormLabel>Product Name</FormLabel>
        <InputField control={control} name="name" placeholder="Product Name" />
      </FormControl>

      {/* Product Price */}
      <FormControl fullWidth>
        <FormLabel>Product Price</FormLabel>
        <InputField
          name="price"
          control={control}
          placeholder="Product Price"
        />
      </FormControl>

      {/* Product Quantity */}
      <FormControl fullWidth>
        <FormLabel>Product Quantity</FormLabel>
        <InputField
          type="number"
          control={control}
          name="quantity"
          placeholder="Product Quantity"
        />
      </FormControl>

      {/* Product Category */}
      <SelectField
        options={[
          { label: "Iphone", value: "Iphone" },
          { label: "ipad", value: "ipad" },
          { label: "Airpod", value: "Airpod" },
        ]}
        control={control}
        name="category"
        label={"Product Category"}
      />

      {/* Short Description */}
      <FormControl fullWidth>
        <FormLabel>Short Description</FormLabel>
        <InputField
          control={control}
          name="short_desc"
          placeholder="Short Description"
          multiline
          rows={3}
        />
      </FormControl>

      {/* Long Description */}
      <FormControl fullWidth>
        <FormLabel>Long Description</FormLabel>
        <InputField
          control={control}
          name="long_desc"
          placeholder="Long Description"
          multiline
          rows={5}
        />
      </FormControl>

      {/* Upload images */}

      <Controller
        control={control}
        name={"images"}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <FormControl fullWidth>
              <FormLabel>Upload image (5 images)</FormLabel>
              <InputField
                control={control}
                name="images"
                {...field}
                ref={null}
                value={value?.fileName}
                onChange={async (e) => {
                  console.log(value, e);
                  const x = handlerOnchange(e.target.files);

                  onChange(x);
                }}
                type="file"
                inputProps={{
                  multiple: true,
                  accept: "image/*",
                }}
              />
            </FormControl>
          );
        }}
      />

      {/* Preview image */}
      <Box>
        {imgUrls &&
          imgUrls.map((url) => (
            <img width={200} src={url} alt={url} key={url} />
          ))}
      </Box>

      <Button disabled={isSubmitting} type="submit" variant="contained">
        {isSubmitting && <CircularProgress />}
        Add New Product
      </Button>
    </Box>
  );
};

export default FormProduct;
