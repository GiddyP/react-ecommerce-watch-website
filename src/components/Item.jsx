import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import { Add, Remove, Favorite } from "@mui/icons-material";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import { tokens } from "../theme2";

const Item = ({ item, width }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smobilePoint = useMediaQuery("(max-width:370px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [like, setLike] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  // Dstructure params from attributes 
  const { category, price, name, imageUrl} = item;

  let fLCapital = s => s = s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Box width={width} mb="2px">
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        backgroundColor={colors.primary[300]}
        width={smobilePoint ? "280px" : "300px"}
        height="350px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          alt={item.name}
          width="200px"
          height="290px"
          src={imageUrl}
          onDoubleClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer", objectFit: "contain" }}
        />
        {/* counter and likes */}
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          top="3%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={colors.primary[600]}
              borderRadius="3px"
              // width="40px"
              height="30px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <Remove />
              </IconButton>
              <Typography mt="3px" color={colors.blueAccent[800]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              onClick={() => setLike(!like)}
              color={like ? "#d63219" : "#272e32"}
              backgroundColor={colors.secondary[900]}
              sx={{
                cursor: "pointer",
              }}
              borderRadius="3px"
              width="40px"
              height="30px"
            >
              <Favorite
                sx={{
                  fontSize: "32px",
                  padding: "2px"
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* add to cart  */}
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="3%"
          left="0"
          width="100%"
          padding="0 15%"
        >
          <Box display="flex" justifyContent="center">
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
              sx={{
                backgroundColor: colors.yellowAccent[700],
                color: "#fbfbfe",
                fontWeight: "bold",
                "&:hover": { backgroundColor: colors.yellowAccent[700] },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography variant="subtitle2" color={colors.primary[100]}>
          {fLCapital(`${category}`)}
        </Typography>
        <Typography
          color={colors.primary[100]}
          fontWeight="bold">#{price}</Typography>
        <Typography
          onClick={() => navigate(`/item/${item.id}`)}
          variant="h5"
          color={colors.primary[100]}
          pb="3px"
          sx={{
            "&:hover": { color: "#c36303", cursor: "pointer" },
            transition: ".3s",
          }}
        >{name}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
