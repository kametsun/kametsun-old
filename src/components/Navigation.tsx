import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  useBreakpointValue,
  Box,
} from "@yamada-ui/react";
import { ReactElement } from "react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import {
  faBars,
  faHouse,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

function MenuItems() {
  return (
    <>
      <Link href="/" _hover={"none"} color={"blackAlpha.950"}>
        <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>Home</MenuItem>
      </Link>
      <Link href="/articles" _hover={"none"} color={"blackAlpha.950"}>
        <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />}>
          Article
        </MenuItem>
      </Link>
    </>
  );
}

function Navigation(): ReactElement {
  const isMobile = useBreakpointValue({
    base: false,
    md: false,
    sm: true,
  });

  return isMobile ? (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FontAwesomeIcon size="xs" icon={faBars} />}
        variant={"outline"}
        border={"solid"}
        borderColor={"blackAlpha.300"}
      />
      <MenuList>
        <MenuItems />
      </MenuList>
    </Menu>
  ) : (
    <Box display={"flex"}>
      <Menu>
        <MenuItems />
      </Menu>
    </Box>
  );
}

export default Navigation;
