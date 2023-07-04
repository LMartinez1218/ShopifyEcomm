import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMERCE
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
            eligendi magni, eaque, veritatis tempore saepe ipsum aut alias optio
            ipsa porro earum consectetur? Doloribus rem cumque magni repudiandae
            explicabo.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corperate &Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Contact Us
          </Typography>
          <Typography mb="30px">333 Ash lane, Minnesoata MIN</Typography>
          <Typography mb="30px">Email: 12344@yahoo.com</Typography>
          <Typography mb="30px">(333)333-3333</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
