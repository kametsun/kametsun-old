import { Box, Image, Link } from "@yamada-ui/react";
import NoPicture from "@kametsun/assets/NO_PICTURE.png";

interface Props {
  imageUrl?: string;
  productName: string;
  productUrl: string;
}

function WishItem(props: Props) {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Image
        src={props.imageUrl ? props.imageUrl : NoPicture}
        m={"3"}
        boxSize={"150px"}
      />
      <Link href={props.productUrl} target="_blank">
        {props.productName}
      </Link>
    </Box>
  );
}

export default WishItem;
