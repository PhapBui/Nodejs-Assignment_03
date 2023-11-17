import React from "react";
import {
  Item,
  ListItem,
  ListTitle,
  NavItem,
  NavTitle,
  NavbarWrapper,
} from "./SidebarStyled";
import { icons } from "@/assets/icons";

const sidebarViewData = [
  // {
  //   title: "Service",
  //   items: [
  //     {
  //       title: "Live Chat",
  //       icons: icons.chat,
  //       path: "/service/chat",
  //     },
  //   ],
  // },
  {
    title: "List",
    items: [
      {
        title: "Dashboard",
        icon: icons.dashboard,
        path: "/",
      },

      {
        title: "Orders",
        icon: icons.orders,
        path: "orders",
      },

      {
        title: "Products",
        icon: icons.product,
        path: "products",
      },
    ],
  },
  {
    title: "Add Edit",
    items: [
      // {
      //   title: "Categories",
      //   icon: icons.type,
      //   path: "add/category",
      // },
      {
        title: "Products",
        icon: icons.product,
        path: "add/product",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <NavbarWrapper>
      {sidebarViewData.map((list) => (
        <React.Fragment key={list.title}>
          <ListTitle>{list.title}</ListTitle>
          <ListItem>
            {list.items.map((item) => (
              <Item key={item.path}>
                <NavItem to={item.path}>
                  <span>{item.icon}</span>
                  <NavTitle>{item.title}</NavTitle>
                </NavItem>
              </Item>
            ))}
          </ListItem>
        </React.Fragment>
      ))}
    </NavbarWrapper>
  );
};

export default Sidebar;
