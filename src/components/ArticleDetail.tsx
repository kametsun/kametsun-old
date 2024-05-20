import { Box, Heading, Text } from "@yamada-ui/react";
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
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <Text>Loading...</Text>;

  return (
    <Box
      p={"8"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Heading py={"5"}>{article.title}</Heading>
      <ReactMarkdown className={"markdown"}>{article.content}</ReactMarkdown>
    </Box>
  );
}

export default ArticleDetail;
