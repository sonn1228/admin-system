import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  CssBaseline,
  ListSubheader,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Home,
  Dashboard,
  People,
  Inventory,
  Category,
  ChevronLeft,
  ChevronRight,
  Lock,          // Added for Permissions
  Group,         // Added for Roles
} from "@mui/icons-material";
import { motion } from "framer-motion";

const drawerWidth = 260;
const collapsedWidth = 72;

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSidebarToggle = () => setSidebarOpen((prev) => !prev);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log("Navigate to Profile");
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    console.log("Logout");
    handleMenuClose();
  };

  const handleUpdateProfile = () => {
    console.log("Update Profile");
    handleMenuClose();
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "grey.200",
        overflow: "hidden",
        transition: "width 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: sidebarOpen ? "space-between" : "center",
          p: 2,
          borderBottom: 1,
          borderColor: "grey.200",
        }}
      >
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              <span className="text-blue-600">Admin</span>Panel
            </Typography>
          </motion.div>
        )}
        <IconButton onClick={handleSidebarToggle}>
          {sidebarOpen ? (
            <ChevronLeft sx={{ color: "text.primary" }} />
          ) : (
            <ChevronRight sx={{ color: "text.primary" }} />
          )}
        </IconButton>
      </Box>

      <List sx={{ px: sidebarOpen ? 2 : 0 }}>
        {[
          { to: "/", text: "Home", icon: <Home /> },
          { to: "/dashboard", text: "Dashboard", icon: <Dashboard /> },
        ].map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              my: 0.5,
              borderRadius: 2,
              "&:hover": { bgcolor: "blue.50" },
              transition: "background-color 0.2s",
            }}
          >
            <ListItemIcon sx={{ color: "blue.500", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  color: "text.primary",
                  "&:hover": { color: "blue.600" },
                }}
              />
            )}
          </ListItem>
        ))}

        {sidebarOpen && (
          <ListSubheader
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mt: 2,
              bgcolor: "transparent",
            }}
          >
            Administration
          </ListSubheader>
        )}
        {[
          { to: "/users", text: "Users", icon: <People /> },
          { to: "/roles", text: "Roles", icon: <Group /> },           // Added Roles
          { to: "/permissions", text: "Permissions", icon: <Lock /> }, // Added Permissions
        ].map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              my: 0.5,
              mx: sidebarOpen ? 2 : 0,
              borderRadius: 2,
              "&:hover": { bgcolor: "blue.50" },
              transition: "background-color 0.2s",
            }}
          >
            <ListItemIcon sx={{ color: "blue.500", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  color: "text.primary",
                  "&:hover": { color: "blue.600" },
                }}
              />
            )}
          </ListItem>
        ))}

        {sidebarOpen && (
          <ListSubheader
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mt: 2,
              bgcolor: "transparent",
            }}
          >
            Product Manager
          </ListSubheader>
        )}
        {[
          { to: "/products/inventory", text: "Inventory", icon: <Inventory /> },
          {
            to: "/products/categories",
            text: "Categories",
            icon: <Category />,
          },
        ].map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.to}
            sx={{
              my: 0.5,
              mx: sidebarOpen ? 2 : 0,
              borderRadius: 2,
              "&:hover": { bgcolor: "blue.50" },
              transition: "background-color 0.2s",
            }}
          >
            <ListItemIcon sx={{ color: "blue.500", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  color: "text.primary",
                  "&:hover": { color: "blue.600" },
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          borderBottom: 1,
          borderColor: "grey.200",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleSidebarToggle} sx={{ mr: 2 }}>
              {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              <span className="text-blue-600">Admin</span> Dashboard
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: "medium",
              }}
            >
              Welcome, Admin
            </Typography>
            <IconButton onClick={handleAvatarClick}>
              <Avatar
                sx={{ width: 32, height: 32, bgcolor: "blue.500" }}
                alt="Admin"
              >
                A
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleProfileClick}>View profile</MenuItem>
              <MenuItem onClick={handleUpdateProfile}>Update profile</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Log out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: sidebarOpen ? drawerWidth : collapsedWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              width: sidebarOpen ? drawerWidth : collapsedWidth,
              transition: "width 0.3s ease",
              boxShadow: "2px 0 15px rgba(0,0,0,0.05)",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sidebarOpen ? drawerWidth : collapsedWidth}px)`,
          mt: "64px",
          minHeight: "100vh",
          bgcolor: "grey.50",
          transition: "width 0.3s ease",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              p: 4,
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              border: 1,
              borderColor: "grey.100",
              maxWidth: "1280px",
              mx: "auto",
            }}
          >
            <Outlet /> {/* Render child routes here */}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AdminLayout;