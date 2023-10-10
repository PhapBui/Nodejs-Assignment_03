import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function AddEditPage() {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return <Outlet />;
}
