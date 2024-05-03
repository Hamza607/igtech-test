import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import levelmarket from "../../assets/Images/levelmarket.png";
import fbadd from "../../assets/Images/digitalmarket.png";
import perclick from "../../assets/Images/perclick.png";
import elementry from "../../assets/Images/buyelementry.png";
import affla from "../../assets/Images/affla.png";
import server from "../../assets/Images/server.png";

const styles = {
  root: {
    marginTop: 4,
    marginBottom: 4,
  },
  heading: {
    color: "#0B9443",
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto",
    width: 600,
  },
  gridItem: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  image: {
    width: "60px",
  },
  bigText: {
    fontWeight: 900,
    color: "green",
    fontSize: "100px",
    textAlign: "center",
  },
};

const ImageBox = ({ src, text }) => (
  <Box sx={styles.gridItem}>
    <img src={src} style={styles.image} alt="" />
    <Typography variant="body1" fontWeight="bold">
      {text}
    </Typography>
  </Box>
);

const BestPartSection = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant="h3" sx={styles.heading}>
        The Best Part is that there’s
      </Typography>
      <Box width="80%" sx={{ margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ alignContent: "center" }}>
            <ImageBox src={levelmarket} text="MLM RECRUITING" />
            <ImageBox src={fbadd} text="FACEBOOK ADS" />
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageBox src={perclick} text="SEO/PPC/Youtube" />
            <Typography sx={styles.bigText}>No</Typography>
            <Box sx={{ ...styles.gridItem, borderTop: "1px solid lightgray" }}>
              <ImageBox src={elementry} text=" No Buying Inventory" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ alignContent: "center" }}>
            <ImageBox src={affla} text="affiliate Marketing" />
            <ImageBox src={server} text="Wordpress or Blogging" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BestPartSection;
