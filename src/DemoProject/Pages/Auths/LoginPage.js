import React from "react";
import {
  Avatar,
  Grid,
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginPage = ({
  onLogin,
  userDetails,
  setUserDetails,
  isError,
  setIsError,
}) => {
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
    </>
  );
};

export default LoginPage;
