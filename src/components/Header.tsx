import { Box, Flex, Heading, Link, Spacer } from "@yamada-ui/react";
import { ReactElement } from "react";
import Navigation from "./Navigation";

function Header(): ReactElement {
  return (
    <>
      <Box
        as="header"
        p={"3"}
        bg={"whiteAlpha.50"}
        shadow={"lg"}
        boxShadow={"3xl"}
        color={"blackAlpha.950"}
        borderBottom={"solid"}
        borderColor={"blackAlpha.300"}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <Flex>
          <Link href="/" color={"blackAlpha.950"} _hover={"none"}>
            <Heading size={"md"}>Welcome to Tsubasa's page!</Heading>
          </Link>
          <Spacer />
          <Navigation />
        </Flex>
      </Box>
      <Box pt={"calc(3rem + 2px)"} />
    </>
  );
}

export default Header;
