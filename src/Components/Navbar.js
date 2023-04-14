import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WorkIcon from "@mui/icons-material/Work";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },

    {
      text: "Company",
      icon: <InfoIcon />,
    },
    {
      text: "Menus",
      icon: <RestaurantMenuIcon />,
    },
    {
      text: "Careers",
      icon: <WorkIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <Link to={"/"}>
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className="navbar-links-container">
        <Link className="" to={"/"}>
          Home
        </Link>
        <Link className="" to={"/company"}>
          Company
        </Link>
        <Link className="" to={"/menus"}>
          Menus
        </Link>
        <Link className="" to={"/careers"}>
          Careers
        </Link>
        <Link className="" to={"/contact"}>
          Contact
        </Link>
        <Link className="" to={"/cart"}></Link>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <Link to={"/reservations"}>
          <button className="primary-button">Reservations</button>
        </Link>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
