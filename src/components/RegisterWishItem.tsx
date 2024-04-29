import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@yamada-ui/react";

function RegisterWishItem() {
  return (
    <Container centerContent>
      <Heading>Register wish item!</Heading>
      <InputGroup width={"30%"}>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input type="text" placeholder="商品画像URL" />
      </InputGroup>

      <InputGroup width={"30%"}>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input type="text" placeholder="商品URL" />
      </InputGroup>

      <InputGroup width={"30%"}>
        <Input type="text" placeholder="商品名"></Input>
      </InputGroup>

      <Button width={"30%"}>Submit</Button>
    </Container>
  );
}

export default RegisterWishItem;
