import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CssVarsProvider } from "@mui/joy/styles";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Link,
  Typography,
} from "@mui/joy";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "@/stores/middlewares/authMiddleware";
import { successToast } from "@/utils/toast"; // Added missing import

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = e.currentTarget.elements;
    // Check input values
    if (!username.value.trim() || !password.value) {
      throw new Error("Please fill in all required fields");
    }

    // Pass credentials to login middleware
    const result = await dispatch(
      login({
        username: username.value,
        password: password.value,
      })
    ).unwrap();

    if (result) {
      navigate("/");
      successToast("Log in successfully");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <CssVarsProvider>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <Box sx={{ mb: 2, textAlign: "center" }}>
              <Typography fontSize="xl2" fontWeight="lg">
                Log in to your account
              </Typography>
              <Typography level="body2" sx={{ my: 1 }}>
                Welcome to Sbom!
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid xs={12}>
                  <FormControl required>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text" // Changed from "username" to "text"
                      name="username"
                      autoComplete="username"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl required>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      endDecorator={
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", my: 2 }}
              >
                <Checkbox
                  size="sm"
                  label="Remember for 30 days"
                  name="rememberMe"
                />
              </Box>
              <Button fullWidth type="submit" variant="solid" sx={{ mb: 3 }}>
                Log in
              </Button>
              <Box sx={{ textAlign: "center" }}>
                <Link fontSize="sm" href="/register" fontWeight="lg">
                  Don't have an account? Register now!
                </Link>
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    </CssVarsProvider>
  );
}

export default Login;
