import { Box, Container, Flex, Heading, Loading } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  content: string;
}

function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BLOG_URL + `/articles/${id}`
        );
        const data: Article = await response.json();
        setArticle(data);
      } catch (error) {
        console.log("Error fetching article: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <Box
      p={"6"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      minHeight="100vh"
    >
      {isLoading ? (
        <Flex align={"center"} justify={"center"} height={"100hv"}>
          <Loading variant="circles" size={"9xl"} />
        </Flex>
      ) : (
        <>
          <Heading px={"1"} size={"md"}>
            {article?.title}
          </Heading>
          <Container>
            <ReactMarkdown className={"markdown"}>
              {article?.content}
            </ReactMarkdown>
          </Container>
        </>
      )}
    </Box>
  );
}

export default ArticleDetail;
