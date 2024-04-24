import { Center, Heading } from "@yamada-ui/react";
import { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer>
      <Center
        h={"10"}
        bg={"whiteAlpha.50"}
        color={"blackAlpha.950"}
        borderTop={"solid"}
        borderColor={"blackAlpha.300"}
      >
        <Heading size={"xs"}>© 2024 kametsun</Heading>
      </Center>
    </footer>
  );
}

export default Footer;
