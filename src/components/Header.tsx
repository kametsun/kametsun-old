import { Box, Flex, Heading, Spacer } from "@yamada-ui/react";
import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <header>
      <Box p={"3"} bg={"whiteAlpha.50"} color={"blackAlpha.950"}>
        <Flex>
          <Heading size={"md"}>Welcome to Tsubasa's page!</Heading>
          <Spacer />
          <Box>テスト</Box>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
