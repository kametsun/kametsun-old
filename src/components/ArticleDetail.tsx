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
    <Box p={"5"}>
      <Heading>{article.title}</Heading>
      <ReactMarkdown className={"markdown"}>{article.content}</ReactMarkdown>
    </Box>
  );
}

export default ArticleDetail;
