import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";
import levelmarket from "../../assets/Images/levelmarket.png";
import fbadd from "../../assets/Images/digitalmarket.png";
import perclick from "../../assets/Images/perclick.png";
import elementry from "../../assets/Images/buyelementry.png";
import affla from "../../assets/Images/affla.png";
import server from "../../assets/Images/server.png";
const StyledTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '" "',
    display: "block",
    position: "absolute",
    left: 0,
    top: "35%",
    width: "1px",
    height: "60px",
    backgroundColor: "lightgray",
  },
  "&::after": {
    content: '" "',
    display: "block",
    position: "absolute",
    right: 0,

    top: "35%",
    width: "1px",
    height: "60px",
    backgroundColor: "lightgray",
  },
}));
const styles = {
  root: {
    marginTop: 4,
    marginBottom: 4,
    width: {xs:"80%", md: "auto"},
    marginX: "auto",
  },
  heading: {
    color: "#0B9443",
    fontWeight: "bold",
    fontSize: { xs: "30px", md: "60px" },
    textAlign: "center",
    margin: "auto",
    width: { sx: "100%", md: 600 },
  },
  gridItem: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
    "&:last-child": {
      borderBottom: { xs: "px solid lightgray", md: "none" },
    },
  },
  image: {
    width: { xs: "120px", md: "60px" },
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
    <Box component="img" src={src} sx={styles.image} alt="" />
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
            <StyledTypography sx={styles.bigText}>No</StyledTypography>
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
