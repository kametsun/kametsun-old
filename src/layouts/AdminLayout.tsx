import RegisterArticle from "@kametsun/components/RegisterArticle";
import RegisterWishItem from "@kametsun/components/RegisterWishItem";
import { Container, VStack } from "@yamada-ui/react";

function AdminLayout() {
  return (
    <main>
      <VStack>
        <Container>
          <RegisterWishItem />
          <RegisterArticle />
        </Container>
      </VStack>
    </main>
  );
}

export default AdminLayout;
