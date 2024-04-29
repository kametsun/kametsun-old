import { Box, Flex, Heading, Link, Spacer } from "@yamada-ui/react";
import { ReactElement } from "react";
import Navigation from "./Navigation";

function Header(): ReactElement {
  return (
    <header>
      <Box
        p={"3"}
        bg={"whiteAlpha.50"}
        color={"blackAlpha.950"}
        borderBottom={"solid"}
        borderColor={"blackAlpha.300"}
      >
        <Flex>
          <Link href="/" color={"blackAlpha.950"} _hover={"none"}>
            <Heading size={"md"}>Welcome to Tsubasa's page!</Heading>
          </Link>
          <Spacer />
          <Navigation />
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
