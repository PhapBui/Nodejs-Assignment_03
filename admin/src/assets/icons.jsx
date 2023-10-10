import {
  BiSolidDashboard,
  BiUser,
  BiSolidTruck,
  BiSolidCity,
} from "react-icons/bi";
import { RiHotelFill } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
import { IoIosOptions } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

export const icons = {
  dashboard: <BiSolidDashboard />,
  user: <BiUser />,
  transaction: <BiSolidTruck />,
  city: <BiSolidCity />,
  hotel: <RiHotelFill />,
  room: <FiCreditCard />,
  type: <IoIosOptions />,

  orders: <GiNotebook />,
  product: <CiMobile3 />,
  addUser: <AiOutlineUserAdd />,
};
