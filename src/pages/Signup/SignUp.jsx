import React, { useState } from "react";
import { Box, Button, Typography, TextField, styled } from "@mui/material";
import backImg from "../../assets/Images/rectangle.png";
import tablet1Img from "../../assets/Images/tablet1.png";
import tablet2Img from "../../assets/Images/tablet2.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const FullHeightBox = styled(Box)(({ theme }) => ({
  height: "120vh",
  padding: theme.spacing(8, 5),
  backgroundImage: `url(${backImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 2),
    height: "120vh",
    backgroundSize: "cover",
  },
}));

const FormBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(4),
  width: 600,
  margin: "auto",
  zIndex: 10,
  borderRadius: theme.shape.borderRadius * 2,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: theme.spacing(2),
  },
}));

const AbsoluteImage = styled("img")(({ theme, side }) => ({
  width: "208px",
  position: "absolute",
  top: theme.spacing(6),
  [side]: "0px",
}));

const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#f7f7f7",
  fontWeight: "700",
  "& .MuiInputBase-input::placeholder": {
    color: "black",
    fontWeight: "bold",
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: theme.spacing(2, 10),
  fontSize: "20px",
  fontWeight: "bold",
  position: "absolute",
  bottom: "-40px",
  left: "23%",
  borderRadius: "40px",
  "&:hover": {
    backgroundColor: "black",
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%",
    right: "10%",
    position: "relative",

    bottom: "0px",
    padding: theme.spacing(1.5, 2),
    fontSize: "16px",
  },
}));

const SignUp = () => {
  const [value, setValue] = useState();
  return (
    <FullHeightBox>
      <AbsoluteImage src={tablet1Img} alt="Tablet Image 1" side="left" />
      <FormBox>
        <Typography
          variant="h3"
          fontWeight="800"
          textAlign="center"
          color="#60BA38"
        >
          Sign Up
        </Typography>
        <InputField label="Name" variant="outlined" />
        <InputField label="Email" variant="outlined" />
        <InputField label="Password" variant="outlined" />
        <Box>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="PK"
            value={value}
            onChange={setValue}
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#f7f7f7",
              color: "#333",
              border: "1px solid rgb(169, 169, 169)",
              borderRadius: "5px",
              padding: "20px",
            }}
          />
        </Box>
        <Typography variant="h5" textAlign="center" fontWeight="700">
          Join for free—No charge!
        </Typography>
        <SignUpButton>Join Us Now</SignUpButton>
      </FormBox>
      <AbsoluteImage src={tablet2Img} alt="Tablet Image 2" side="right" />
    </FullHeightBox>
  );
};

export default SignUp;
