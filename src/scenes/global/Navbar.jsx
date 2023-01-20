import { useEffect, useRef } from "react";
import { TweenMax, Power4 } from 'gsap';
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Phone,
  Email,
  Watch,
  Search,
  ShoppingCart,
  Menu,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme2";

function Navbar() {
  let navItem = useRef(null);
  let navOption0 = useRef(null);
  let navOption1 = useRef(null);
  let navOption2 = useRef(null);
  let navOption3 = useRef(null);

  useEffect(() => {
    TweenMax.to(
      navItem,
      { opacity: 1, duration: 1, delay: 1, ease: Power4.easeInOut, }
    );
    TweenMax.to(
      navOption0,
      { opacity: 1, duration: 1, delay: 1.9, ease: Power4.easeInOut, }
    );
    TweenMax.to(
      navOption1,
      { opacity: 1, duration: 1, delay: 2.2, ease: Power4.easeInOut, }
    );
    TweenMax.to(
      navOption2,
      { opacity: 1, duration: 1, delay: 2.5, ease: Power4.easeInOut, }
    );
    TweenMax.to(
      navOption3,
      { opacity: 1, duration: 1, delay: 2.9, ease: Power4.easeInOut, }
    );
  }, []);



  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const breakPoint = useMediaQuery("(max-width:749px)");
  const smobilePoint = useMediaQuery("(max-width:370px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [navbar, setNavbar] = useState(false);

  const scrollHeader = () => {
    // When the scroll is greater than 50 viewport height, add the scroll-header className to the header tag
    window.scrollY >= 300 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener('scroll', scrollHeader);

  return (
    <Box
      backgroundColor="transparent"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="80px"
      color="black"
      position="absolute"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        ref={el => { navItem = el; }}
        width="100%"
        border="1px solid rgba(255, 255, 255, 0.01)"
        py="1px"
        display={navbar || breakPoint ? "none" : "block"}
        sx={{
          opacity: "0",
        }}
      >
        <Box
          width="83%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          background="rgba(255, 255, 255, 0.05)"
        >
          <Box
            onClick={() => navigate("/frontend-watch-ecommerce/")}
            sx={{ "&:hover": { cursor: "pointer", color: "#7c7b7b" } }}
            color="#8f8f8f"
            fontWeight="bold"
          >
            <IconButton
              sx={{
                "&:hover": { cursor: "pointer", 
              },
              color: "#cccccc",
              }}
            >
              <Phone />
            </IconButton>
            + 234 9054345432
          </Box>
          <Box
            onClick={() => navigate("/frontend-watch-ecommerce/")}
            sx={{ "&:hover": { cursor: "pointer", color: "#7c7b7b" } }}
            color="#8f8f8f"
            fontWeight="600"
          >
            <IconButton
              sx={{
                "&:hover": { cursor: "pointer" },
                color: "#cccccc",
              }}
            >
              <Email />
            </IconButton>
            vintagestores@gmail.com
          </Box>
          <Box
            onClick={() => navigate("/frontend-watch-ecommerce/")}
            sx={{ "&:hover": { cursor: "pointer", color: "#7c7b7b" } }}
            color="#8f8f8f"
            fontWeight="600"
          >
            <i>- watch your wrist...</i>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        border="1px solid rgba(255, 255, 255, 0.02)"
        py="10px"
        backgroundColor="rgba(192, 175, 175, 0.02)"
        display={navbar ? "none" : "block"}
      >
        <Box
          width={breakPoint ? "95%" : "80%"}
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            onClick={() => navigate("/frontend-watch-ecommerce/")}
            sx={{ "&:hover": { cursor: "pointer" } }}
            color={"#f4a261"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
          >
            <IconButton

              sx={{
                color: "#8f8f8f",
                "&:hover": { cursor: "pointer" },
                fontSize: "23px",
                mr: "3px",
              }}
            >
              <Watch />
            </IconButton>
            <Box
              display="flex"
              alignItems="center"
              mt="3px"
            >
              <Typography variant="h4"> VINTAGE
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            columnGap="20px"
            zIndex="2"
          >
            <IconButton
              ref={el => { navOption0 = el; }}
              sx={{
                color: "#8f8f8f",
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] },
                display: smobilePoint ? "none" : "flex",
                opacity: 0,
              }}
            >
              <Search />
            </IconButton>

            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
              <IconButton
                ref={el => { navOption1 = el; }}
                onClick={() => dispatch(setIsCartOpen({}))}
                sx={{
                  color: "#8f8f8f",
                  "&:hover": { cursor: "pointer", color: colors.redAccent[300] },
                  opacity: "0"
                }}
              >
                <ShoppingCart />
              </IconButton>
            </Badge>

            <IconButton
              ref={el => { navOption2 = el; }}
              onClick={colorMode.toggleColorMode}
              sx={{
                color: "#8f8f8f",
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] },
                opacity: "0",
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            {/* <IconButton
              ref={el => { navOption3 = el; }}
              sx={{
                color: "#8f8f8f",
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] },
                opacity: 0,
              }}>
              <Menu />
            </IconButton> */}
          </Box>
        </Box>
      </Box>
      {/* fixed navbar  */}
      <Box
        backgroundColor={colors.primary[800]}
        display={navbar ? "block" : "none"}
        // flexDirection="column"
        alignItems="center"
        width="100vw"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        borderBottom={`2px solid ${colors.primary[700]}`}

        sx={{
          transition: ".5s",
        }}

      >
        <Box
          width={breakPoint ? "95%" : "80%"}
          margin="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="10px"
        >
          <Box
            onClick={() => navigate("/frontend-watch-ecommerce/")}
            sx={{ "&:hover": { cursor: "pointer" } }}
            color={colors.redAccent[400]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
          >
            <IconButton

              sx={{
                color: colors.primary[100],
                "&:hover": { cursor: "pointer" },
                fontSize: "23px",
                mr: "3px",
              }}
            >
              <Watch />
            </IconButton>
            <Box
              display="flex"
              alignItems="center"
              mt="3px"
            >
              <Typography variant="h4"> VINTAGE
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            columnGap="20px"
            zIndex="2"
          >
            <IconButton
              sx={{
                color: colors.primary[200],
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] },
                display: smobilePoint ? "none" : "flex",
              }}
            >
              <Search />
            </IconButton>
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
              <IconButton
                onClick={() => dispatch(setIsCartOpen({}))}
                sx={{
                  color: colors.primary[200],
                  "&:hover": { cursor: "pointer", color: colors.redAccent[300] }
                }}
              >
                <ShoppingCart />
              </IconButton>
            </Badge>

            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                color: colors.primary[200],
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] }
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            {/* <IconButton
              sx={{
                color: colors.primary[200],
                "&:hover": { cursor: "pointer", color: colors.redAccent[300] }
              }}>
              <i className='bx bx-menu'></i>
            </IconButton> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
