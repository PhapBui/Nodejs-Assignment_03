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
import { SelectField } from "../formField/SelectField";
import { useSelector } from "react-redux";
import { categoryOption } from "../../../redux/category/categorySlice";
import { replaceImgUrl } from "../../../utils/image";
import Input from "../formField/inputFieldFFF";

// eslint-disable-next-line react/prop-types
const FormProduct = ({ initProduct, handlerFormSubmit, formMode, loading }) => {
  // yup schema
  const productSchema = yup.object().shape({
    name: yup.string().required("Please enter product name"),
    price: yup
      .number("Quantity must be numberic")
      .min(0, "Minimum price is 0")
      .required("Please enter product price"),
    category: yup.string().required("You must be choose a category"),
    images: yup.mixed().test({
      name: "validator-images",
      test: function (value) {
        if (formMode === "Update") return true;
        if (value.length === 0)
          return this.createError({
            message: "Please upload product images",
            path: "images",
          });
        if (value.length < 5)
          return this.createError({
            message: "Please upload at least 5 images",
            path: "images",
          });
        for (let i = 0; i < value.length; i++) {
          if (!value[i].type.includes("image/")) {
            return this.createError({
              message: "file upload must be image (png, jpg,jpeg)",
              path: "images",
            });
          }
          return true;
        }
      },
    }),
    short_desc: yup.string().required("Please enter product short description"),
    long_desc: yup.string().required("Please enter product long description"),
    quantity: yup
      .number("Quantity must be numberic")
      .min(0, "Minimum quantity is 0")
      .required("Please enter product quantity"),
  });

  // init hook form
  const { handleSubmit, control, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(productSchema),
    defaultValues: initProduct,
  });

  // category Option
  const categoryOpts = useSelector(categoryOption);

  const [imgUrls, setImgUrls] = useState([]);

  const handlerOnchange = async (files) => {
    let images = [];
    let urls = [];
    try {
      if (files.length > 0) {
        const l = files.length;
        const formData = new FormData();
        for (let i = 0; i < l; i++) {
          formData.append("images", files[i]);
          const image = await generateBase64FromImage(files[i]);
          const url = URL.createObjectURL(files[i]);
          urls.push(url);
          images.push(image);
        }
        setImgUrls(urls);
        return formData;
      }
      throw new Error("Please upload image");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (data) => {
    const { images } = data;
    // create form data
    const productData = new FormData();
    for (let i = 0; i < images.length; i++) {
      productData.append("images", images[i]);
    }
    productData.append("category", data.category);
    productData.append("long_desc", data.long_desc);
    productData.append("name", data.name);
    productData.append("price", data.price);
    productData.append("quantity", data.quantity);
    productData.append("short_desc", data.short_desc);

    handlerFormSubmit(productData);
  };

  // setDefaultValue
  useEffect(() => {
    reset(initProduct);
    // eslint-disable-next-line react/prop-types
    setImgUrls(() => initProduct.images || []);
  }, [reset, initProduct]);

  // remove preview URL
  useEffect(() => {
    if (!imgUrls && !(imgUrls.length > 0)) return;
    return () => {
      imgUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [imgUrls]);
  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {/* Product Name */}
      <FormControl fullWidth>
        <FormLabel>Product Name</FormLabel>
        <Input control={control} name="name" placeholder="Product Name" />
      </FormControl>

      {/* Product Price */}
      <FormControl fullWidth>
        <FormLabel>Product Price</FormLabel>
        <Input name="price" control={control} placeholder="Product Price" />
      </FormControl>

      {/* Product Quantity */}
      <FormControl fullWidth>
        <FormLabel>Product Quantity</FormLabel>
        <Input
          type="number"
          control={control}
          name="quantity"
          placeholder="Product Quantity"
        />
      </FormControl>

      {/* Product Category */}
      <SelectField
        options={categoryOpts}
        control={control}
        name="category"
        label={"Product Category"}
      />

      {/* Short Description */}
      <FormControl fullWidth>
        <FormLabel>Short Description</FormLabel>
        <Input
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
        <Input
          control={control}
          name="long_desc"
          placeholder="Long Description"
          multiline
          rows={5}
        />
      </FormControl>

      {/* Upload images */}

      {formMode === "Create" && (
        <Controller
          control={control}
          name={"images"}
          render={({ field: { value, onChange, ...field } }) => {
            return (
              <FormControl fullWidth>
                <FormLabel>Upload image (5 images)</FormLabel>
                <Input
                  control={control}
                  name="images"
                  {...field}
                  ref={null}
                  value={value?.fileName}
                  onChange={async (e) => {
                    await handlerOnchange(e.target.files);
                    onChange(e.target.files);
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
      )}

      {/* Preview image */}
      <Box>
        {imgUrls &&
          imgUrls.map((url) => (
            <img width={200} src={url} alt={replaceImgUrl(url)} key={url} />
          ))}
      </Box>

      <Button disabled={loading} type="submit" variant="contained">
        {loading && <CircularProgress />}
        {formMode}
      </Button>
    </Box>
  );
};

export default FormProduct;
