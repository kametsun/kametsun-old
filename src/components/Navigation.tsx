import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from "@yamada-ui/react";
import { ReactElement } from "react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faBars, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";

function MenuItems() {
  return (
    <MenuList>
      <Link href="/">
        <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>Home</MenuItem>
      </Link>
      <Link href="/wishlist">
        <MenuItem icon={<FontAwesomeIcon icon={faStar} />}>Wishlist</MenuItem>
      </Link>
    </MenuList>
  );
}

function Navigation(): ReactElement {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FontAwesomeIcon size="xs" icon={faBars} />}
        variant={"outline"}
        color={"blackAlpha.950"}
        border={"solid"}
        borderColor={"blackAlpha.300"}
      ></MenuButton>
      <MenuItems />
    </Menu>
  );
}

export default Navigation;
