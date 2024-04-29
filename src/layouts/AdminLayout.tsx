import RegisterWishItem from "@kametsun/components/RegisterWishItem";
import { Container, VStack } from "@yamada-ui/react";

function AdminLayout() {
  return (
    <main>
      <VStack>
        <Container>
          <RegisterWishItem />
        </Container>
      </VStack>
    </main>
  );
}

export default AdminLayout;
