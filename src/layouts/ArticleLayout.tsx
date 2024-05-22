import { useEffect, useState } from "react";
import {
  VStack,
  Flex,
  useBreakpointValue,
  Loading,
  HStack,
} from "@yamada-ui/react";
import ArticleButton from "@kametsun/components/ArticleButton";

interface Article {
  id: string;
  title: string;
  content: string;
  isPublic: boolean;
  thumbnail: string;
  createdAt: string;
  updatedAt?: string;
}

function ArticleLayout() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const LayoutComponent = useBreakpointValue({
    base: HStack,
    md: VStack,
  });

  const width = useBreakpointValue({
    base: "70%",
    md: "70%",
    sm: "95%",
  });

  const fetchArticles = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BLOG_URL + "/articles");
      const data: Article[] = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Flex align={"center"} justify={"center"} height={"auto"} py={"12"}>
      {isLoading ? (
        <Flex align={"center"} justify={"center"} height={"100hv"}>
          <Loading variant="circles" size={"9xl"} />
        </Flex>
      ) : (
        LayoutComponent && (
          <LayoutComponent align={"stretch"} p={"3"} width={width}>
            {articles.map((article) => (
              <ArticleButton
                key={article.id}
                id={article.id}
                title={article.title}
                thumbnail={article.thumbnail}
                createdAt={article.createdAt}
              />
            ))}
          </LayoutComponent>
        )
      )}
    </Flex>
  );
}

export default ArticleLayout;
