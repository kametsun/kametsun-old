import { VStack, Box, Heading, Text, Image } from "@yamada-ui/react";

const articles = [
  {
    id: 1,
    title: "First Article",
    summary: "This is the summary of the first article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Second Article",
    summary: "This is the summary of the second article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Third Article",
    summary: "This is the summary of the third article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 1,
    title: "First Article",
    summary: "This is the summary of the first article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Second Article",
    summary: "This is the summary of the second article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    title: "Third Article",
    summary: "This is the summary of the third article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    title: "Fourth Article",
    summary: "This is the summary of the fourth article.",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

function ArticleLayout() {
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
            src={article.image}
            alt={article.title}
            boxSize="150px"
            objectFit="cover"
            mr={4}
          />
          <Box>
            <Heading size="md">{article.title}</Heading>
            <Text mt={2}>{article.summary}</Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}
export default ArticleLayout;
