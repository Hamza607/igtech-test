import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import forYouImage from "../../assets/Images/foryou.png";
import replaceImage from "../../assets/Images/replace.png";
import interestedImage from "../../assets/Images/interested.png";
import ifyou from "../../assets/Images/ifyou.png";
import progress from "../../assets/Images/progressyou.png";
import nutral from "../../assets/Images/nutra.png";

const styles = {
  mainContainer: {
    paddingX: 4,
  },
  centerText: {
    textAlign: "center",
    fontWeight: 800,
  },
  greenText: {
    textAlign: "center",
    fontWeight: 800,
    color: "#43AC44",
  },
  descriptionText: {
    textAlign: "center",
    fontWeight: 600,
    width: 600,
    margin: "20px auto",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    my: 2,
  },
  imageStyle: {
    width: 300,
  },
  headerText: {
    textAlign: "center",
    fontWeight: 800,
    color: "#43AC44",
    width: 300,
    margin: "10px auto",
  },
  bodyText: {
    textAlign: "center",
    fontWeight: 600,
    width: 700,
    margin: "auto",
  },
  buttonStyle: {
    borderRadius: 40,
    fontSize: 16,
    color: "white",
    fontWeight: 600,
    backgroundColor: "#D20000",
    paddingX: 8,
    paddingY: 1,
    display: "block",
    margin: "auto",
  },
};

const ForYou = () => {
  return (
    <>
      <Box sx={styles.mainContainer}>
        <Typography variant="h6" sx={styles.centerText}>
          THIS IS FOR YOU IF YOU
        </Typography>
        <Typography variant="h4" sx={styles.greenText}>
          YOU IF YOU
        </Typography>
        <Typography variant="h6" sx={styles.descriptionText}>
          Have already tried to build an online business before and failed.
        </Typography>
        <Box sx={styles.imageContainer}>
          <img
            src={forYouImage}
            style={styles.imageStyle}
            alt="Challenges faced in online business"
          />
        </Box>
        <Typography variant="h6" sx={styles.descriptionText}>
          Are looking to transition away from a J-O-B and replace your primary
          income source.
        </Typography>
        <Box sx={styles.imageContainer}>
          <img
            src={replaceImage}
            style={styles.imageStyle}
            alt="Job replacement idea"
          />
        </Box>
      </Box>

      <Typography variant="h5" sx={styles.headerText}>
        IF YOU CURRENTLY ARE INTERESTED
      </Typography>
      <Typography variant="body1" sx={styles.bodyText}>
        in starting a 6 figure online supplement drop-shipping business,
        automating it and working from the comfort of your own home part-time.
      </Typography>
      <Box sx={styles.imageContainer}>
        <img
          src={interestedImage}
          style={{ width: 500 }}
          alt="Interested in drop-shipping business"
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img
              src={ifyou}
              style={{ width: 300 }}
              alt="Interested in drop-shipping business"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "800" }}>
            IF YOU
          </Typography>
          <Box sx={{ width: "300px" }}>
            Want expert, credible sound{" "}
            <span style={{ color: "green", fontWeight: "400" }}>guidance</span>{" "}
            to filter all the other
            <p style={{ color: "green", fontWeight: "bold" }}>
              {" "}
              "Noisy Marketers"
            </p>
            telling you what to do.
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "#43AC44",
          width: 300,
          marginX: " auto",
          marginTop: "30px ",
        }}
      >
        IF YOU
      </Typography>
      <Typography variant="body1" sx={styles.bodyText}>
        Are ready to make real life-changing progress
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "#43AC44",
          width: 300,
          marginX: " auto",
        }}
      >
        IN JUST 6-DAYS!
      </Typography>
      <Box sx={styles.imageContainer}>
        <img
          src={progress}
          style={{ width: 500 }}
          alt="Interested in drop-shipping business"
        />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: "800", textAlign: "center" }}
            >
              Ready To Jump Into The
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "800", color: "#43AC44", textAlign: "center" }}
            >
              NutraFunnels Accelerator?
            </Typography>
            <Button variant="contained" sx={styles.buttonStyle}>
              Yes, I'm in
            </Button>
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", textAlign: "center" }}
            >
              Join For Free - No Charge!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={nutral}
              style={{ width: 600 }}
              alt="Interested in drop-shipping business"
            />
          </Box>
        </Grid>
      </Grid>
      <Typography textAlign={"center"} p={"10px"}>
        Copyrights © 2022 NutraFunnels. All Rights Reserved
      </Typography>
    </>
  );
};

export default ForYou;
