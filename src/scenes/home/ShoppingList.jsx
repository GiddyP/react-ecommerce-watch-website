import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Button, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
// console.log(setItems)
import { tokens } from "../../theme2";
import { Link } from "react-router-dom";

import sanityClient from "../../client.js";

const ShoppingList = () => {
  const [postData, setPostData] = useState(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("all");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const watchItems = useSelector((state) => state.cart.items);
  const smobilePoint = useMediaQuery("(max-width:370px)");
  const breakPoint = useMediaQuery("(min-width:769px)");
  let time = new Date();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // async function getItems() {
  //   const items = await fetch(
  //     // "https://strapi-production-c72c.up.railway.app/api/watch-items",
  //     "http://localhost:1337/api/watch-items?populate=image",
  //     { method: "GET" }
  //   )
  //     .then(res => {
  //       if (!res.ok) {
  //         throw Error('could not fetch the data from backend');
  //       }
  //       setError(null);
  //       return res.json();
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       // console.log(err.message);
  //     });
  //   setIsPending(false);
  //   const itemsJson = await items;
  //   dispatch(setItems(itemsJson.data[0]));
  //   // console.log(itemsJson);
  // }
  // console.log(watchItems)

  function getItems() {
    sanityClient.fetch(
      `*[_type == "watchProject"]{
               id,
               name,
               longDesc,
               shortDesc,
               price,
               category,
               description,
               imageUrl,
               reviews,
              }`).then((data) => {
        if (data.length == 0) {
          throw Error('could not fetch the data from backend');
        } else {
          setError(null);
          setPostData(data);
          dispatch(setItems(data));
        }
      }).catch(err => {
        setError(err.message);
      });
    setIsPending(false);
  }
  // console.log(postData);
  // console.log(watchItems);

  // useEffect(() => {
  //   sanityClient.fetch(
  //     `*[_type == "watchProject"]{
  //          id,
  //          name,
  //          longDesc,
  //          shortDesc,
  //          price,
  //          category,
  //          description,
  //          imageUrl,
  //          reviews,
  //         }`).then((data) => setPostData(data))
  //     .catch(console.error);
  // }, []);// eslint-disable-line react-hooks/exhaustive-deps

  // console.log(postData);

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const recommendedItems = watchItems.filter(
    (item) => item.category === "Recommended"
  );

  const newArrivalsItems = watchItems.filter(
    (item) => item.category === "newArrivals"
  );
  const bestPricesItems = watchItems.filter(
    (item) => item.category === "bestPrices"
  );
  const freeDeliveryItems = watchItems.filter(
    (item) => item.category === "freeDelivery"
  );
  const topRatedItems = watchItems.filter(
    (item) => item.category === "topRated"
  );

  return (
    <Box
      width={breakPoint ? "80%" : "90%"}
      margin="40px auto 80px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color={colors.primary[200]}
        gap="8px"
      >
        <Typography
          variant={smobilePoint ? "h3" : "h2"}
        // textAlign="center"  
        >
          Featured
        </Typography>
        <Typography
          variant={smobilePoint ? "h3" : "h2"}
          fontWeight="bold"
        >Products</Typography>
      </Box>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none", } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
          "& .MuiButtonBase-root": {
            width: "13%",
            fontSize: breakPoint ? "0.8rem" : "0.52rem",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="Recommended" value="recommended" />
        <Tab label="New Arrivals" value="newArrivals" />
        <Tab label="Best Prices" value="bestPrices" />
        <Tab label="Free Delivery" value="freeDelivery" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      {error && (<Box
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
          href="https://giddyp.github.io/frontend-watch-ecommerce/"
        >
          Refresh
        </a>
      </Box>)}

      {isPending && (<Box
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt="20px"
      >
        <ScaleLoader color="#d79736" />
      </Box>)
      }
      <Box
        display={smobilePoint ? "flex" : "grid"}
        flexDirection="column"
        alignItems="center"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap={"1.33%"}
      >

        {value === "all" &&
          watchItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "recommended" &&
          recommendedItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "newArrivals" &&
          newArrivalsItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "bestPrices" &&
          bestPricesItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "freeDelivery" &&
          freeDeliveryItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}

        {value === "topRated" &&
          topRatedItems?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
