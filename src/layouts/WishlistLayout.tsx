import Wishlist from "@kametsun/components/Wishlist";
import { VStack } from "@yamada-ui/react";

function WishlistLayout() {
  return (
    <main>
      <VStack bg={"whiteAlpha.950"} color={"blackAlpha.950"}>
        <Wishlist />
      </VStack>
    </main>
  );
}

export default WishlistLayout;
