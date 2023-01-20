import { useTheme } from "@emotion/react";
import { Box, Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme2";
import Subscribe from "../../scenes/home/Subscribe";
import {
    Instagram,
    Facebook,
    Twitter,
    Bolt
} from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const breakPoint = useMediaQuery("(min-width:1000px)");
    const mobilePoint = useMediaQuery("(max-width:749px)");

    return (
        <Box
            mt="70"
            p={breakPoint ? "80px 0" : "30px 0"}
            // p="80px 0"
            // height="450px"
            backgroundColor={colors.primary[300]}
            display="flex"
            flexDirection="column"
        >
            <Box
                width={breakPoint ? "80%" : "90%"}
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(30px, 30px, 40px)"
            >
                <Box width={mobilePoint ? "clamp(50%, 15%, 40%)" : "clamp(30%, 15%, 40%)"}>
                    <Box
                        display="flex"
                        alignItems="center"
                        color={colors.redAccent[600]}
                        mb="20px"
                    >
                        <Typography variant="h4"> VINTAGE
                        </Typography>
                    </Box>
                    <Box
                        color="#151515"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        // justifyContent="center"
                        gap="1px"
                        p="5px 1px"
                    >
                        <IconButton
                            sx={{
                                "&: hover": { cursor: "pointer", color: colors.primary[600] },

                                color: colors.primary[800],
                            }}
                        >
                            <Instagram fontSize="large" />
                        </IconButton>
                        <IconButton
                            sx={{
                                "&: hover": { cursor: "pointer", color: colors.primary[600] },
                                fontSize: "30px",
                                color: colors.primary[800],
                            }}
                        >
                            <Facebook fontSize="large" />
                        </IconButton>
                        <IconButton
                            sx={{
                                "&: hover": { cursor: "pointer", color: colors.primary[700] },
                                fontSize: "30px",
                                color: colors.primary[800],
                            }}
                        >
                            <Twitter fontSize="large" />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    width={mobilePoint ? "clamp(50%, 15%, 40%)" : "clamp(16%, 15%, 15%)"}
                    color="#151515">
                    <Typography variant="h4" fontWeight="bold" mb="20px">
                        About Us
                    </Typography>
                    <Typography mb="13px">Careers</Typography>
                    <Typography mb="13px">Our Stores</Typography>
                    <Typography mb="13px">Terms & Conditions</Typography>
                    <Typography mb="13px">Privacy Policy</Typography>
                </Box>
                <Box
                    width="clamp(14%, 15%, 20%)"
                    display={breakPoint ? "block" : "none"}
                    color="#151515"
                >
                    <Typography variant="h4" fontWeight="bold" mb="20px">
                        Customer Care
                    </Typography>
                    <Typography mb="13px">Help Center</Typography>
                    <Typography mb="13px">Track Your Order</Typography>
                    <Typography mb="13px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="13px">Returns & Refunds</Typography>
                </Box>
                <Box width={mobilePoint ? "clamp(80%, 5%, 4%)" : "clamp(28%, 25%, 30%)"}>
                    <Subscribe />
                </Box>
            </Box>
            <Box
                display={breakPoint ? "flex" : "none"}
                width="100%"
                justifyContent="center"
                alignItems="center"
                mt="63px"
                position="relative"
                gap="25px"
                color={colors.primary[800]}
            >
                <Divider
                    sx={{
                        width: "80%",
                        m: -0.5,
                        position: "absolute",
                        top: "-5px",
                        backgroundColor: "#827450",
                    }}

                    orientation="horizontal"
                />
                <Typography>Compliance</Typography>
                <Typography>Risk warning</Typography>
                <Typography>Important Notice</Typography>
                <Typography>Investor relations</Typography>
                <Typography>Privacy</Typography>
                <Typography>Cookie policy</Typography>
                <Typography>General business terms</Typography>
                <Divider
                    sx={{
                        width: "80%",
                        m: -0.5,
                        position: "absolute",
                        bottom: "-5px",
                        backgroundColor: "#827450",
                    }}
                    orientation="horizontal"
                />
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                mt="35px"
                color="#151515"
                position="relative"
                fontSize="11px"
            >
                <Divider
                    sx={{
                        width: "80%",
                        position: "absolute",
                        top: "-10px",
                        backgroundColor: "#636363",
                        display: breakPoint ? "none" : "flex",
                    }}

                    orientation={"horizontal"}
                />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                ><Bolt fontSize="small" /> Powered by P_wild</Box>
            </Box>
        </Box >
    );
};

export default Footer;