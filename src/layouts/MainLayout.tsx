import GithubCommits from "@kametsun/components/GithubCommits";
import Profile from "@kametsun/components/Profile";
import { VStack } from "@yamada-ui/react";
import { ReactElement } from "react";

function MainLayout(): ReactElement {
  return (
    <main>
      <VStack bg={"whiteAlpha.950"} color={"blackAlpha.950"}>
        <Profile />
        <GithubCommits />
      </VStack>
    </main>
  );
}

export default MainLayout;
