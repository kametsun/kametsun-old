import Profile from "@kametsun/components/Profile";
import { VStack } from "@yamada-ui/react";
import { ReactElement } from "react";

function MainLayout(): ReactElement {
  return (
    <main>
      <VStack bg={"neutral.950"} color={"neutral.50"}>
        <Profile />
      </VStack>
    </main>
  );
}

export default MainLayout;
