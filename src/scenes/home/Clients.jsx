import { Box, useTheme } from "@mui/material";
import { clients } from "../../constants";
import { tokens } from "../../theme2";


const Clients = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box

            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            pb="30px"
        >
            <Box
                width="90%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="30px"
                backgroundColor={colors.primary[300]}
                p="15px"
                borderRadius="5px"
                position="relative"
            >
                {
                    clients.map((client) => (
                        <Box key={client.id}>
                            <img 
                            src={client.logo} 
                            alt={client.id} 
                            width="100%" 
                             />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};

export default Clients;
