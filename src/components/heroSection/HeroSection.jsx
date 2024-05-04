import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import backimg from "../../assets/Images/rectangle.png";
import logo from "../../assets/Images/logo.png";
import tab1 from "../../assets/Images/tablet1.png";
import elipses from "../../assets/Images/elipses.png";
import tab2 from "../../assets/Images/tablet2.png";
import join from "../../assets/Images/join.png";
import heroimg from "../../assets/Images/heroimg.png";
import check from "../../assets/Images/Check.png";
import { useNavigate } from "react-router-dom";

const Image = styled("img")(({ theme, width, position, top, right, left }) => ({
  width: width,
  position: position,
  top: top,
  right: right,
  left: left,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1, 6),
  backgroundColor: "white",
  color: "#5DBC39",
  fontWeight: "bold",
  fontSize: "20px",
  borderRadius: "40px",
  "&:hover": {
    backgroundColor: "white",
    opacity: 0.9,
  },
}));
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        component="section"
        sx={{
          minHeight: "160vh",
          backgroundImage: `url(${backimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
          <Box
            component="img"
            src={logo}
            sx={{ zIndex: "99" }}
            width="308px"
            alt="Company Logo"
          />
        </Box>
        <Box
          component="img"
          src={tab1}
          width="208px"
          position="absolute"
          top="50px"
          left="0px"
          zIndex={"4"}
          alt="Tablet Image 1"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box
          component="img"
          src={elipses}
          width="100%"
          position="absolute"
          top="0px"
          left="0px"
          zIndex="2"
          alt="Tablet Image 1"
          sx={{
            display: { xs: "block", md: "block" },
            height: { xs: "100%", md: "80vh" },
          }}
        />
        <Box
          component="img"
          src={tab2}
          width="208px"
          position="absolute"
          top="50px"
          right="0px"
          alt="Tablet Image 2"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Box component={"section"} sx={{ zIndex: 99, position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "800",
              textAlign: "center",
              mt: 5,
              top: "-20px",
              position: "relative",
              width: "280px",
              mx: "auto",
            }}
          >
            Join Our
            <Box
              component="img"
              sx={{
                position: "absolute",
                bottom: "-70%",
                width: "280px",
                left: "0%",
              }}
              src={join}
              alt="join now"
            />
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              textAlign: { xs: "justify", sm: "center" },
              width: { xs: "90%", md: 600 },
              mx: "auto",
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            6-Day Health-Supplement Drop-Shipping Business Accelerator
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              textAlign: { xs: "justify", sm: "center" },
              width: { xs: "90%", md: 600 },
              mx: "auto",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Discover how to build a 6 figure Supplement Drop-shipping Business
            In 6 Days WITHOUT Paying for Facebook Ads Or Traffic!
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "800",
              textAlign: "center",
              mt: 3,
            }}
          >
            6 days!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Image src={heroimg} width="70%" alt="Hero Image" />
          <StyledButton onClick={() => navigate("/sign-up")}>
            Register Now!
          </StyledButton>
        </Box>
      </Box>

      <Box sx={{ my: 4, mx: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            color: "#43AC44",
            textAlign: "center",
            mt: 2,
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          In only 6 days
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "100%", md: 700 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          we're going to show you exactly how you can copy our success
          step-by-step and build your own NutraFunnel that auto-dropships your
          own private label supplement for you
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            color: "#43AC44",
            textAlign: "center",
            mt: 2,
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          In only 6 days
        </Typography>
        <Typography
          variant="h5"
          sx={{
            width: { xs: "100%", md: 800 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          We are going to guide you through this simple, 6 step program, that
          will help you to
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={check} width="20px" alt="Checkmark" />
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "25px" } }}
            variant="h5"
          >
            Quit Your Job
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={check} width="20px" alt="Checkmark" />
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "25px" } }}
            variant="h5"
          >
            Retire
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={check} width="20px" alt="Checkmark" />
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "25px" } }}
            variant="h5"
          >
            Get the life and Bank Account That You Want
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
