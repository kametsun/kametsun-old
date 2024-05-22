import formatDate from "@kametsun/utils/FormatTime";
import { Box, Image, Text } from "@yamada-ui/react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  thumbnail: string;
  createdAt: string;
}

function ArticleButton(props: Props) {
  console.log(props.createdAt);
  return (
    <Link to={`/articles/${props.id}`}>
      <Box
        key={props.id}
        p={"1"}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="sm"
        display="flex"
        alignItems="center"
        position="relative"
      >
        <Image
          src={props.thumbnail}
          alt={props.title}
          boxSize="150px"
          objectFit="cover"
          mr={4}
        />
        <Box flex={"1"}>
          <Text as={"b"} lineClamp={1}>
            {props.title}
          </Text>
        </Box>
        <Text
          position={"absolute"}
          bottom={"1"}
          right={"1"}
          px={"2"}
          color={"gray.300"}
        >
          投稿日: {formatDate(props.createdAt)}
        </Text>
      </Box>
    </Link>
  );
}
export default ArticleButton;
