import React, { memo, useEffect } from "react";

const AddtoCart = ({ product, onSubmit, actionName, initState }) => {
  const dispacth = useDispatch();

  useEffect(() => {
    if (product.id) dispacth(productActions.fetchSingleProduct(product.id));
  }, [dispacth, product.id]);

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .integer("Nhap so nguyen")
      .positive("please enter a positive number")
      .min(1, "Min is 1")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm <
  InitState >
  {
    defaultValues: initState,
    resolver: yupResolver(schema),
  };

  const handleOnSubmit = (data: InitState) => {
    const newProduct: ProductDetails = {
      ...product,
      quantity: data.quantity,
    };
    if (onSubmit) onSubmit(newProduct);
    if (actionName !== "Update") reset({ quantity: 1 });
  };

  const quantity = watch("quantity");

  const handleInscrea = (numberIncrease: number) => {
    let newQuantity = +quantity + numberIncrease;
    if (newQuantity <= 1) {
      newQuantity = 1;
    }
    if (actionName) setValue("quantity", newQuantity);
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = Number(e.currentTarget.value.replace(/[^0-9]/g, ""));
    setValue("quantity", a || 1);
  };

  return (
    <Box>
      {product.quantity > 0 ? (
        <>
          <Box
            component={"form"}
            onSubmit={handleSubmit(handleOnSubmit)}
            sx={{
              "display": "flex",
              "&>input": {
                width: "40px",
                border: "1px solid rgb(236, 236, 236)",
              },

              "&>button": {
                cursor: "pointer",
                width: "30px",
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(236, 236, 236)",
              },
              "&>button,>input": {
                height: "30px",
                color: " rgb(36, 36, 36)",
                fontSize: "14px",
                textAlign: "center",
                outline: "none",
                transition:
                  "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
              },
              "&>button[type=submit]": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "150px",
                maxWidth: "300px",
                textTransform: "capitalize",
                border: "none",
                borderRadius: "4px",
                outline: "none",
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(255, 57, 69)",
                ml: 2,
              },
            }}
          >
            <button
              className={quantity === 1 ? "disbale" : ""}
              type="button"
              onClick={() => handleInscrea(-1)}
            >
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                alt="remove-icon"
                width="20"
                height="20"
              />
            </button>
            <input
              {...register("quantity", {
                onChange: handleOnchange,
                min: 1,
              })}
            />

            <button
              type="button"
              onClick={() => handleInscrea(1)}
            >
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                alt="add-icon"
                width="20"
                height="20"
              />
            </button>
            <button type="submit">{actionName}</button>
          </Box>
          {errors && <p style={{ margin: 0 }}>{errors.quantity?.message}</p>}
        </>
      ) : (
        <>
          <p>Sold Out</p>
          <p>Order now</p>
        </>
      )}
    </Box>
  );
};

export default memo(AddtoCart);
