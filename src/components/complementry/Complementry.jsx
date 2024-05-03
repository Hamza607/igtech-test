import React from "react";
import { Box, Button, Typography } from "@mui/material";
import complementImg from "../../assets/Images/complementry.png";
import accelerateImg from "../../assets/Images/acceleration.png";

const styles = {
  mainContainer: {
    padding: 4,
  },
  centerText: {
    textAlign: "center",
    fontWeight: 800,
  },
  headlineGreen: {
    textAlign: "center",
    fontWeight: 800,
    color: "#43AC44",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  largeImage: {
    width: 500,
  },
  descriptionText: {
    textAlign: "center",
    width: 700,
    margin: "10px auto",
  },
  buttonStyle: {
    borderRadius: 40,
    fontSize: 20,
    color: "white",
    fontWeight: 600,
    backgroundColor: "#D20000",
    paddingX: 8,
    paddingY: 2,
    display: "block",
    margin: "auto",
  },
};

function Complementary() {
  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h5" sx={styles.centerText}>
        The 6 day Accelerator
      </Typography>
      <Typography variant="h2" sx={styles.headlineGreen}>
        IS Complimentary!
      </Typography>
      <Box sx={styles.imageContainer}>
        <img
          src={complementImg}
          alt="Complementary"
          style={styles.largeImage}
        />
      </Box>

      <Box my="20px">
        <Typography variant="h5" sx={styles.centerText}>
          In the 6-day Accelerator
        </Typography>
        <Typography variant="h2" sx={styles.headlineGreen}>
          Accelerator
        </Typography>
        <Typography variant="h6" sx={styles.descriptionText}>
          you'll get the support of hundreds of other people just like you that
          are looking to build profitable passive income streams online! These
          people will help encourage you every step of your online business
          journey.
        </Typography>
        <Box sx={styles.imageContainer}>
          <img
            src={accelerateImg}
            alt="Acceleration"
            style={styles.largeImage}
          />
        </Box>
      </Box>

      <Button variant="contained" sx={styles.buttonStyle}>
        Yes, I'm in
      </Button>
      <Typography
        variant="body1"
        sx={{ fontWeight: 600, textAlign: "center", my: "10px" }}
      >
        Join For Free - No Charge!
      </Typography>
    </Box>
  );
}

export default Complementary;
