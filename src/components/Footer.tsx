import { Center, Heading } from "@yamada-ui/react";
import { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer>
      <Center h={"10"} bg={"neutral.950"} color={"neutral.50"}>
        <Heading size={"xs"}>© 2024 kametsun</Heading>
      </Center>
    </footer>
  );
}

export default Footer;
