import React from "react";
import { Box, Button, Typography } from "@mui/material";
import complementImg from "../../assets/Images/complementry.png";
import accelerateImg from "../../assets/Images/acceleration.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  mainContainer: {
    padding: 4,
  },
  centerText: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: {xs: "20px", md: "30px"}
  },
  headlineGreen: {
    textAlign: "center",
    fontWeight: { xs: "700", md: 800 },
    fontSize: { xs: "30px", md: "60px" },
    color: "#43AC44",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  largeImage: {
    width: { xs: "80%", md: "500px" },  // Adjusted to match your inline styles
  },
  descriptionText: {
    textAlign:{xs: "justify", md: "center"},
    width: { xs: "100%", md: "700px" },
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
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h5" sx={styles.centerText}>
        The 6 day Accelerator
      </Typography>
      <Typography variant="h2" sx={styles.headlineGreen}>
        IS Complimentary!
      </Typography>
      <Box sx={styles.imageContainer} marginY={"20px"}>
        <Box component="img" src={complementImg} alt="Complementary" sx={styles.largeImage} />
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
          <Box component="img" src={accelerateImg} alt="Acceleration" sx={styles.largeImage} />
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
