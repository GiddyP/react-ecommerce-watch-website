import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme2";

const Confirmation = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            m="140px auto"
            width="80%"
            height="50vh"
        >
            <Box 
            borderRadius="5px"
            p="10px 10px" 
            backgroundColor={colors.greenAccent[700]}>
                <Typography colors={colors.primary[200]}>Success!</Typography>
                You have successfully made an Order - {" "}
                <strong>Congrats on making your purchase</strong>
            </Box>
        </Box>
    );
};

export default Confirmation;