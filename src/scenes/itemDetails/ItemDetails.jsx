import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import { tokens } from "../../theme2";
import { ArrowBackIosNew } from "@mui/icons-material";

const ItemDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mobilePoint = useMediaQuery("(max-width:749px)");
  const smobilePoint = useMediaQuery("(max-width:370px)");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  // console.log("items", items);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(

      `http://localhost:1337/api/watch-items/${itemId}`,
      {
        method: "GET",
      }
    )
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data from backend');
        }
        setError(null);
        return res.json();
      })
      .catch(err => {
        setError(err.message);
        // console.log(err.message);
      });
    setIsPending(false);
    const itemJson = await item;
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/watch-items",
      { method: "GET" }
    );
    const itemsJson = await items.json();

    dispatch(setItems(itemsJson.data));
  }


  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="120px auto 80px">
      <Box
        display={smobilePoint ? "flex" : "none"}
        gap="5px"
        alignItems="center" 
        onClick={() => navigate(`/frontend-watch-ecommerce/`)}
        cursor="pointer"
        mb="15px"
      >
        <IconButton
          sx={{
            width: "0px",
            height: "0px",
            "&:hover": { background: "none", transform: "translateX(-5px)", },
            transition: ".3s"
          }}
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
        <Typography
          sx={{
            cursor: "pointer",
            justifyContent: "center"
          }}
          variant="h5">Home</Typography>
      </Box>
      {/* ItemsDetails  */}
      {error
        ? (<Box
          display="flex"
          height="50vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          pt="20px"
          gap="15px"
        >
          <Box>{error} - Something went wrong <br /> Try refeshing the page</Box>
          <a
            style={{
              textDecoration: "none",
              backgroundColor: '#0f3ae6',
              boxShadow: "none",
              color: "white",
              borderRadius: "5px",
              padding: "10px 30px",
              "&:hover": { backgroundColor: '#3e64d6', }
            }}
            href="https://giddyp.github.io/item/1"
          >
            Refresh
          </a>
        </Box>)
        : < Box >
          <Box display="flex" flexWrap="wrap" columnGap="40px">
            {/* IMAGES */}
            <Box
              flex="1 1 40%"
              mb="40px"
              backgroundColor={colors.primary[300]}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt={item?.attributes?.name}
                width="80%"
                height="80%"
                src={item?.attributes?.url}
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* ACTIONS */}
            <Box
              flex="1 1 50%"
              mb="40px"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box
                display={smobilePoint ? "none" : "flex"}
                gap="5px"
                alignItems="center"
                onClick={() => navigate(`/frontend-watch-ecommerce/`)}
                cursor="pointer"
              >
                <IconButton
                  sx={{
                    width: "0px",
                    height: "0px",
                    "&:hover": { background: "none", transform: "translateX(-5px)", },
                    fontSize: "20px",
                    transition: ".3s"
                  }}
                >
                  <ArrowBackIosNew fontSize="small" />
                </IconButton>
                <Typography
                  sx={{
                    cursor: "pointer",
                    justifyContent: "center"
                  }}
                  variant="h5">Home</Typography>
              </Box>
              <Box m="0px 0 5px 0">
                <Typography mb="5px">CATEGORIES: ({item?.attributes?.category})</Typography>
                <Typography mb="4px" variant="h2">{item?.attributes?.name}</Typography>
                <Typography variant="h5" fontWeight="600">#{item?.attributes?.price}</Typography>
                <Typography sx={{ mt: "20px" }}>
                  {item?.attributes?.longDesc}
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" minHeight="50px">
                <Box
                  display="flex"
                  alignItems="center"
                  // border={`1.5px solid ${shades.neutral[300]}`}
                  mr="20px"
                  p="2px 5px"
                >
                  <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                  <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button
                  sx={{
                    backgroundColor: "#222222",
                    color: "white",
                    borderRadius: 0,
                    minWidth: "150px",
                    padding: smobilePoint ? "5px 0px" : "10px 40px",
                  }}
                  onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                >
                  ADD TO CART
                </Button>
              </Box>
            </Box>
          </Box>

          {/* INFORMATION */}
          <Box m="20px 0">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="DESCRIPTION" value="description" />
              <Tab label="REVIEWS" value="reviews" />
            </Tabs>
          </Box>
          <Box display="flex" flexWrap="wrap" gap="15px">
            {value === "description" && (
              <Box
              >{item?.attributes?.description}</Box>
            )}
            {value === "reviews" && (
              <Box
              >{item?.attributes?.reviews}</Box>
            )}
          </Box>
        </Box>
      }
      {/* RELATED ITEMS */}
      <Box
        mt="50px" width="100%">
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign={mobilePoint ? "center" : "start"}
        >
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent={mobilePoint ? "center" : "space-between"}
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box >
  );
};

export default ItemDetails;
