import { Box, InputBase, Divider, Typography, IconButton, useTheme } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import { tokens } from "../../theme2";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        gap="13px"
        color="#151515"
        mb="20px"
      >
        <Typography variant="h4" fontWeight="bold">Newsletter</Typography>
        <IconButton
          sx={{
            width: "0px",
            height: "0px",
            color: "#151515",
          }}
        >
          <MarkEmailReadOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography color="#151515">
        and receive $20 coupon for your first order when you checkout.
      </Typography>
      <Box
        p="2px 0"
        display="flex"
        flexDirection="column"
        width="100%"

      >
        <Box
          p="10px 4px"
          m="5px 0"
          width="95%"
          backgroundColor={colors.primary[900]}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            
          />
        </Box>
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}

        <Box
          p="10px 4px"
          m="5px 0"
          width="95%"
          backgroundColor={colors.blueAccent[900]}
        >
          <Typography
            sx={{
              p: "5px", ":hover": { cursor: "pointer" },
              textAlign: "center",
              color: "#efefef"
            }}>
            Subscribe
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
