import { useEffect, useState } from "react";
import { VStack, Box, Heading, Text, Image } from "@yamada-ui/react";

interface Article {
  id: string;
  title: string;
  content: string;
  isPublic: boolean;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

function ArticleLayout() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BLOG_URL + "/articles");
      const data: Article[] = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <VStack align="stretch">
      {articles.map((article) => (
        <Box
          key={article.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="sm"
          display="flex"
          alignItems="center"
        >
          <Image
            src={article.thumbnail}
            alt={article.title}
            boxSize="150px"
            objectFit="cover"
            mr={4}
          />
          <Box>
            <Heading size="md">{article.title}</Heading>
            <Text mt={2}>{article.content}</Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}

export default ArticleLayout;
