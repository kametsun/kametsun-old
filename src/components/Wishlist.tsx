import { Container, Heading, Text, VStack } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import WishItem from "./WishItem";

interface WishItem {
  id: string;
  image_url: string;
  item_url: string;
  item_name: string;
  created_at: string;
}

function Wishlist() {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    fetchWishItems();
  }, []);

  const fetchWishItems = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BASE_URL + "/wishlist");
      const data = await res.json();
      if (data !== null) {
        setIsNull(true);
      }
      setWishItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container alignItems={"center"}>
      <Heading>ほしい物リスト</Heading>
      <VStack alignItems={"center"}>
        {isNull ? (
          wishItems.map((item) => (
            <WishItem
              key={item.id}
              imageUrl={item.image_url}
              productName={item.item_name}
              productUrl={item.item_url}
            />
          ))
        ) : (
          <Text>何もありません。</Text>
        )}
      </VStack>
    </Container>
  );
}

export default Wishlist;
