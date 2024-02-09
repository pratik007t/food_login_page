import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Recipe</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Add Recipe</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>About us</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            borderBottom: "none",
        
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <RestaurantMenuIcon
                edge="start"
                // Set color to black
                sx={{
                  mr: 2,
                  color: "black",
                }}
              />

              <Typography
                color="#000"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <div>
                  <span>Perfect</span>
                  <span style={{color:"#ff847c"}}>Recipe</span>
                </div>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Recipe</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>Add Recipe</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>About us</NavLink>
                  </li>
                </ul>
              </Box>
              <Stack
                spacing={2}
                direction="row"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Button variant="contained" style={{background:"#fff",color:"#000"}}>Login</Button>
                <Button variant="contained" style={{background:"#c06c84"}}>Sign Up</Button>
              </Stack>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                  display: { md: "none" },
                  color:"#000"
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right" // Set anchor to 'right'
            sx={{
              display: { xs: "block", sm: "block" }, // Change 'none' to 'block' for sm screens
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
