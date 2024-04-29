import {
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from "@yamada-ui/react";
import NoPicture from "@kametsun/assets/NO_PICTURE.png";

interface Props {
  imageUrl?: string;
  productName: string;
  productUrl: string;
}

function WishItem(props: Props) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
    sm: true,
  });

  const isProductUrl = props.productUrl && props.productUrl.trim() !== "";

  return (
    <LinkBox
      display={"flex"}
      alignItems={"center"}
      border={"solid"}
      borderColor={"blackAlpha.300"}
      bg={"whiteAlpha.50"}
      color={"blackAlpha.950"}
      width={isMobile ? "auto" : "30%"}
    >
      {isProductUrl && <LinkOverlay href={props.productUrl} target="_blank" />}
      <Image
        src={props.imageUrl ? props.imageUrl : NoPicture}
        m={"3"}
        boxSize={"150px"}
      />
      <Heading size={"md"} mx={"4px"}>
        {props.productName}
      </Heading>
    </LinkBox>
  );
}

export default WishItem;
