import { Box, Heading } from "@yamada-ui/react";
import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <header>
      <Box p={"3"} bg={"neutral.800"} color={"neutral.50"}>
        <Heading size={"md"}>Welcome to Tsubasa's page!</Heading>
      </Box>
    </header>
  );
}

export default Header;
