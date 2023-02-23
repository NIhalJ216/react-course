import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useTheme } from "@material-ui/core/styles";

const LoginPage = ({
  onLogin,
  userDetails,
  setUserDetails,
  isError,
  setIsError,
}) => {
  // const theme = createTheme();
  const handleLogin = () => {
    onLogin(userDetails);
  };

  const handleChange = (event) => {
    setIsError(false);
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login To Your Account
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              id="email"
              label="Email Address"
              name="email"
              error={isError}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              error={isError}
              onChange={handleChange}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            {isError && (
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "red",
                }}
              >
                Please enter valid credentials
              </Typography>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
};

export default LoginPage;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginPage.css";

// function LoginPage({ userDetails, setUserDetails, onLogin, isError }) {
//   const [passwordType, setPasswordType] = useState("password");

//   const navigateToLandingPage = () => {
//     onLogin(userDetails);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//     } else {
//       setPasswordType("password");
//     }
//   };
//   console.log("isError", isError);
//   return (
//     <>
//       <h1>Login To Your Account</h1>
//       <div
//         className="shadow p-3 mb-5 bg-body rounded mx-auto"
//         style={{ width: "45%" }}
//       >
//         <div className="mb-2">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="email"
//             name="email"
//             placeholder="Please Enter your email"
//             onChange={handleChange}
//             onBlur={handleChange}
//             style={{ background: isError ? "#f6b0b0" : "#e8f0fe" }}
//           />
//         </div>
//         <div className="mb-2">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <div style={{ display: "flex" }}>
//             <input
//               type={passwordType}
//               className="form-control"
//               id="password"
//               name="password"
//               placeholder="Please Enter your password"
//               onChange={handleChange}
//               onBlur={handleChange}
//               style={{ background: isError ? "#f6b0b0" : "#e8f0fe" }}
//             />
//             <i
//               className="fa-solid fa-eye mx-2"
//               style={{ marginTop: "0.7rem", cursor: "pointer" }}
//               onClick={togglePassword}
//             ></i>
//           </div>
//         </div>
//         <div
//           className="mb-2"
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <button
//             type="button"
//             className="btn btn-success"
//             onClick={navigateToLandingPage}
//           >
//             Login
//           </button>
//           {isError && <p>Please enter valid credentials</p>}
//           <Link to="/signup" className="mx-2">
//             Forgot Password?
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;
