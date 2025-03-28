import React, { Fragment } from "react";
import { Typography, Box, Paper } from "@mui/material";

const Home = () => {
  return (
    <Fragment>
      <Paper>
        <Box p={2}>
          <Typography variant="h4" gutterBottom>
            Home.jsx
          </Typography>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default Home;
