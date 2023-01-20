import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import { tokens } from "../../theme2";
import "./main-carousel.css";
import { TweenMax, Power3 } from 'gsap';

const MainCarousel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  let imgItem = useRef(null);

  useEffect(() => {
    // console.log(imgItem);
    // imgItem.style.display = "none";
    // TweenMax.to(
    //   imgItem,
    //   .8,
    //   {
    //     opacity: 1,
    //     y: -50,
    //     ease: Power3.easeOut,
    //   }
    // )
    TweenMax.to(
      imgItem,
      {opacity: 1, duration: 1, delay:1.8, y: -30, ease: Power3.easeOut,}
    )
  }, []);

  return (
    <Box>
      <Box
        className="images"
      ></Box>
      <Box
        ref={el => {imgItem = el}}
        color="white"
        padding="20px"
        borderRadius="1px"
        textAlign="left"
        backgroundColor="rgb(0, 0, 0, 0.4)"
        position="absolute"
        top="51%"
        left={isNonMobile ? "10%" : "0"}
        right={isNonMobile ? undefined : "0"}
        margin={isNonMobile ? undefined : "0 auto"}
        maxWidth={isNonMobile ? undefined : "240px"}
        sx={{
          opacity: "0"
        }}
      // filter= "blur(309px)"
      >
        <Typography color={colors.greenAccent[300]}>NEW WATCH COLLECTIONS</Typography>
        <Typography variant="h1">Summer Sale</Typography>
        <Typography
          fontWeight="bold"
          color={colors.greenAccent[400]}
          sx={{ textDecoration: "underline" }}
        >
          Explore
        </Typography>
        <Box
          sx={{
            // display: "flex",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "5px",
            top: "0",
            transition: "all 5s ease",
            cursor: "pointer",
            background: "linear-gradient(157.81deg, #f4a261 -43.27%, #f4a361 -21.24%, #f4a861 12.19%, #f4b261 29.82%, #e6ab7b 51.94%, #f0b483 90.29%)",
            opacity: "0.2",
            filter: "blur(30px)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default MainCarousel;
