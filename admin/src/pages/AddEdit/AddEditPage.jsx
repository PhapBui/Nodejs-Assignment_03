import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../redux/category/categorySlice";

export default function AddEditPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryActions.fetchAllCategoryStart());
  }, [dispatch]);
  return <Outlet />;
}
