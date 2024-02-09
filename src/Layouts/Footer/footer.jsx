import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  InputAdornment,
  IconButton,
  Toolbar,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "#f5f5f5",
      padding: "20px 0",
      marginTop: "auto", // Push the footer to the bottom of the page
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }}>
      <Container maxWidth="xl">
 =          <Grid container spacing={3}>
            {/* First Grid: Logo with text and description */}
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <RestaurantMenuIcon
                  sx={{
                    color: "black",
                  }}
                />
                <Typography color="#000" variant="h6">
                  <div>
                    <span>Perfect</span>
                    <span style={{ color: "#ff847c" }}>Recipe</span>
                  </div>
                </Typography>
              </Box>

              <Typography variant="body2">
                The purpose of lorem ipsum is to create a natural looking block of
                text (sentance,paraghraph,page,etc.) that doesn't distract from
                the layout.
              </Typography>
            </Grid>

            {/* Second Grid: Quick links, Legal, Terms */}
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Quick Links
                </Typography>
                <Typography variant="body2">Home</Typography>
                <Typography variant="body2">Recipes</Typography>
                <Typography variant="body2">Blog</Typography>
              </div>
              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Quick Links
                </Typography>
                <Typography variant="body2">Share Recipe</Typography>
                <Typography variant="body2">About Us</Typography>
                <Typography variant="body2">Contact</Typography>
              </div>

              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Legal
                </Typography>
                <Typography variant="body2">Term Of Use</Typography>
                <Typography variant="body2">Privacy & cookies</Typography>
              </div>
            </Grid>

            {/* Third Grid: Email text field and button */}
            <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
              <Typography variant="h5">Newsletter</Typography>
              <Typography variant="body2">
                Subscribe to our newsletter to get more free tip
              </Typography>
              <form>
                <TextField
                  variant="outlined"
                  placeholder="Enter your email"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <EmailIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" color="primary" fullWidth style={{ textTransform: "none", }}>
                  Subscribe
                </Button>
              </form>
            </Grid>
          </Grid>
          <Grid mt={4}>
            <Divider style={{ height: "3px" }} />
          </Grid>
        <Grid
          mt={3}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>@2023 RecipeLogo. All Right Reserved</Typography>
          <Grid sx={{ display: "flex" }}>
            <MusicVideoIcon />
            <XIcon />
            <FacebookIcon />
            <InstagramIcon/>
            <AdsClickIcon />
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
};

export default Footer;
