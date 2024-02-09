import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import image from "../assets/food.png";

import { IconButton, InputAdornment, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const StyledSocialButton = styled(Button)({
  flexGrow: 1 /* Set a maximum width if necessary */,
  textTransform: "none",
});

const StyledSignInLink = styled(Typography)({
  marginTop: "20px",
});

const StyledSocialButtonContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px" /* Adjust the gap as needed */,
  marginTop: "10px",
});

const StyledCard = styled(Card)({
  borderRadius: "0",
  boxShadow: "none",
});

const MainCard = styled(Card)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
}));
const StyledCardMedia = styled(CardMedia)({
  width: "100%", // Make the image take up the entire width
  height: "auto", // Ensure aspect ratio is maintained
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "11px 0px 0px 0px", // Default padding

  [theme.breakpoints.up("md")]: {
    padding: "0 0px 0px 30px", // Override for screens wider than md
  },
}));

const StyledForm = styled("form")({
  marginTop: "35px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0",
    },
    "&:hover fieldset": {
      borderColor: "#72c02c",
    },
  },
  "&:nth-child(1) .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "10px 10px 0px 0px",
    },
  },
  "&:nth-child(4) .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0px 0px 10px 10px",
    },
  },
});

const Home = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
    agreed: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  const handleAgree = () => {
    setValues({ ...values, agreed: !values.agreed });
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <MainCard>
          <Box sx={{ margin: "30px 30px 30px 30px" }}>
            <Grid container>
              {/* Image on the left */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <StyledCard>
                  <StyledCardMedia
                    component="img"
                    alt="Login Image"
                    image={image}
                  />
                </StyledCard>
              </Grid>

              {/* Form on the right */}
              <Grid item xs={12} md={6}>
                <StyledCard>
                  <StyledCardContent>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                      Want to join our Family
                    </Typography>
                    <StyledForm noValidate onSubmit={handleSubmit}>
                      <StyledTextField
                        fullWidth
                        value={values.username}
                        onChange={handleChange("username")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                                <PersonOutlineIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      <StyledTextField
                        fullWidth
                        value={values.email}
                        onChange={handleChange("email")}
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

                      <StyledTextField
                        fullWidth
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                                <LockIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword}>
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      <StyledTextField
                        fullWidth
                        type={values.showPassword ? "text" : "password"}
                        value={values.repeatPassword}
                        onChange={handleChange("repeatPassword")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                                <LockIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleShowPassword}>
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={values.agreed}
                            onChange={handleAgree}
                            color="primary"
                          />
                        }
                        label={
                          <div style={{ display: "flex" }}>
                            <Typography>I agree to the </Typography>
                            <Typography sx={{ textDecoration: "underline" }}>
                              terms and policies
                            </Typography>
                          </div>
                        }
                        sx={{ marginTop: "20px" }}
                      />
                    </StyledForm>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: "10px" }}
                    >
                      Sign Up
                    </Button>

                    <Typography sx={{ marginTop: "35px" }}>
                      Or you can join with
                    </Typography>
                    <StyledSocialButtonContainer>
                      <StyledSocialButton
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                      >
                        Sign in with Google
                      </StyledSocialButton>
                      <StyledSocialButton
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                      >
                        Sign in with Facebook
                      </StyledSocialButton>
                    </StyledSocialButtonContainer>

                    {/* Sign In link for existing users */}
                    <StyledSignInLink variant="body2">
                      Already have an account? <Link to="/signin">Sign In</Link>
                    </StyledSignInLink>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        margin: "24px 0px -29px",
                      }}
                    >
                      <RestaurantMenuIcon
                        edge="end"
                        // Set marginLeft for spacing
                        sx={{
                          ml: 2,
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
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      </Container>
    </Box>
  );
};

export default Home;
