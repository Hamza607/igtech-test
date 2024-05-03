import { Box, Button, Typography } from "@mui/material";
import React from "react";
import stepImage from "../../assets/Images/fivestep.png";
import globalimg from "../../assets/Images/globalstep.png";
import { styled } from "@mui/system";

const FiveStep = () => {
  const Image = styled("img")(
    ({ theme, width, position, top, right, left }) => ({
      width: width,
      position: position,
      top: top,
      right: right,
      left: left,
    })
  );
  const steps = [
    {
      id: 1,
      title: "Spy",
      description:
        "First we use insider information to find out what supplement funnels are hot.",
      color: "#25C5D9",
      position: { top: "0%", left: "-80%" },
    },
    {
      id: 2,
      title: "Funnel hack",
      description:
        "First we use insider information to find out what supplement funnels are hot.",
      color: "#FFAC1E",
      position: { top: "60%", left: "-60%" },
    },
    {
      id: 3,
      title: "Outsource",
      description:
        "We find an offshore outsourcer to put the whole funnel together for us.",
      color: "#25C5D9",
      position: { top: "80%", left: "15%" },
    },
    {
      id: 4,
      title: "Traffic outsource",
      description:
        "Then we outsource all of the traffic-running to an affiliate network and PROFIT!",
      color: "#E64857",
      position: { top: "65%", left: "90%" },
    },
    {
      id: 5,
      title: "Rinse & repeat",
      description:
        "Then we rinse and repeat! You can do this again and again and build as many NutraFunnels as you want! it's just that SIMPLE!",
      color: "#920F3B",
      position: { top: "0%", left: "110%" },
    },
  ];

  return (
    <>
      <Box sx={{ my: 4, bgcolor: "#F6F6F6", p: 2, height: "480px" }}>
        <Typography variant="h5" fontWeight="600" textAlign="center">
          How to become successful{" "}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "#43AC44", textAlign: "center" }}
        >
          in 5 steps{" "}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box width="320px" sx={{ position: "relative", m: "auto" }}>
            <Image src={stepImage} width="100%" alt="Step Image" />
            <Image
              src={globalimg}
              width="60px"
              alt="global Image"
              style={{ position: "absolute", top: "56%", left: "40%" }}
            />
            {steps.map((step) => (
              <Box
                key={step.id}
                width={"220px"}
                height={"fit-content"}
                sx={{
                  textAlign:
                    step.id === 4 || step.id === 5
                      ? "start"
                      : step.id === 3
                      ? "center"
                      : "end",
                  mt: 4,
                  position: "absolute",
                  ...step.position,
                }}
              >
                <Typography
                  variant="h6"
                  color={step.color}
                  fontWeight={"bold"}
                  mr={"5px"}
                >
                  {step.title}
                </Typography>
                <Typography variant="body2" mr={"5px"}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: "110px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "40px",
              fontWeight: "bold",
              width: "300px",
              py: 2,
              px: 6,
              bgcolor: "#D20000",
              fontSize: "20px",
            }}
          >
            Yes, I'm in
          </Button>
        </Box>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Join For Free - No Charge!
      </Typography>
    </>
  );
};

export default FiveStep;
