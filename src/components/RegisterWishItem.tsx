import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@yamada-ui/react";
import { useState } from "react";
import WishItem from "./WishItem";

function RegisterWishItem() {
  const [imageUrl, setImageUrl] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [itemName, setItemName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(import.meta.env.VITE_BASE_URL + "/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image_url: imageUrl,
          item_url: itemUrl,
          item_name: itemName,
        }),
      });

      if (res.ok) {
        alert("登録に成功しました");
        setImageUrl("");
        setItemUrl("");
        setItemName("");
      } else {
        alert("登録に失敗しました");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container centerContent>
        <WishItem
          imageUrl={imageUrl}
          productName={itemName}
          productUrl={itemUrl}
        />
        <Heading>Register wish item!</Heading>
        <InputGroup width={"30%"}>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input
            type="text"
            placeholder="商品画像URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </InputGroup>

        <InputGroup width={"30%"}>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input
            type="text"
            placeholder="商品URL"
            value={itemUrl}
            onChange={(e) => setItemUrl(e.target.value)}
          />
        </InputGroup>

        <InputGroup width={"30%"}>
          <Input
            type="text"
            placeholder="商品名"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></Input>
        </InputGroup>

        <Button type="submit" width={"30%"}>
          Submit
        </Button>
      </Container>
    </form>
  );
}

export default RegisterWishItem;
