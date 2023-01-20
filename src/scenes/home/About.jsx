import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { rakshit, shreesha } from "../../assets";
import { tokens } from "../../theme2";

const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const breakPoint = useMediaQuery("(min-width:1000px)");
    const mobilePoint = useMediaQuery("(max-width:749px)");

    return (
        <Box
            height="90vh"
            // width="80%"
            p="10px 20px"
            margin="20px auto 80px"
            position="relative"
            display={mobilePoint ? "none" : "block"}
        >
            <Box
                margin="0 auto"
                display="flex"
                gap="2px"
            >
                <Box
                    position="absolute"
                    top="6%"
                    left="26%"
                    cursor="pointer"
                    display={breakPoint ? "flex" : "none"}
                    sx={{
                        "&:hover": { transform: "translate(8%, -5.1%)", },
                        transition: ".5s",
                        cursor: "pointer",
                    }}

                >
                    <img
                        src={rakshit}
                        width="300px"
                        height="500px"
                        style={{
                            objectFit: "cover"
                        }} />
                </Box>
                <Box
                    position="absolute"
                    top="10px"
                    left="5%"
                >
                    <img
                        src={shreesha}
                        width={breakPoint ? "300px" : "440px"}
                        height="500px"
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </Box>
                <Box
                    width="45%"
                    position="absolute"
                    top="50px"
                    right="5%"
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    color={colors.yellowAccent[800]}
                    p="12px">
                    <Typography variant="h1">About</Typography>
                    <Typography variant="h1">Vintage Watches</Typography>
                    <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam velit libero expedita vero rem ratione cum nihil accusamus molestias. Quae, obcaecati non!</Typography>
                    {/* <Typography variant="h2">OUR STORY</Typography> */}
                    <Typography variant="h3">Best Watch Distributor of
                        this year</Typography>
                    <Typography variant="h5"> The Latest and modern watches of this year, is available in various presentations in this store, discover them now.</Typography>
                    {/* <Typography fontSize="40px" fontWeight="600">+ 234 9054345432</Typography> */}
                    <Box
                        display="flex"
                        justifyContent="end"
                        padding="10px"
                        m="50px 20px 0 0"
                    >

                        <cite style={{ fontSize: "22px" }}>- watch your wrist...</cite>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
