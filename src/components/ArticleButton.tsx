import { Box, Heading, Image } from "@yamada-ui/react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  thumbnail: string;
}

function ArticleButton(props: Props) {
  return (
    <Link to={`/articles/${props.id}`}>
      <Box
        key={props.id}
        p={"5"}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="sm"
        display="flex"
        alignItems="center"
      >
        <Image
          src={props.thumbnail}
          alt={props.title}
          boxSize="150px"
          objectFit="cover"
          mr={4}
        />
        <Box>
          <Heading size="md">{props.title}</Heading>
        </Box>
      </Box>
    </Link>
  );
}
export default ArticleButton;
