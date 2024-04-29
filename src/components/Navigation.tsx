import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@yamada-ui/react";
import { ReactElement } from "react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faBars, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MenuItems() {
  return (
    <MenuList>
      <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
        <Link to={"/"}>Home</Link>
      </MenuItem>
      <MenuItem icon={<FontAwesomeIcon icon={faStar} />}>
        <Link to={"/wishlist"}>Wishlist</Link>
      </MenuItem>
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
