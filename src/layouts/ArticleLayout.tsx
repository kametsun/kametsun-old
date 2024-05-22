import { useEffect, useState } from "react";
import {
  VStack,
  Flex,
  useBreakpointValue,
  Loading,
  HStack,
  Heading,
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
  const [articleCount, setArticleCount] = useState<number | null>(null);
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

  const fetchArticleCount = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_BLOG_URL + "/articles/count"
      );
      const count = await res.json();
      setArticleCount(count);
    } catch (error) {
      console.error("カウント取得エラーが発生しました" + error);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchArticleCount();
  }, []);

  return (
    <>
      <Flex justifyContent={"center"} m={"5"}>
        {articleCount !== null && !isLoading && (
          <Heading as={"h2"} fontSize="lg">
            記事件数: {articleCount}件
          </Heading>
        )}
      </Flex>
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
    </>
  );
}

export default ArticleLayout;
