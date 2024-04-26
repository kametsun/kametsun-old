import { Box, Heading } from "@yamada-ui/react";
import { useEffect, useState } from "react";

const GithubCommits = () => {
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    const fetchRepositoryNames = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_API;
        const res = await fetch(`https://api.github.com/users/kametsun/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayString = encodeURIComponent(
          yesterday.toISOString().slice(0, 10)
        );

        let totalCount = 0;

        data.map(async (repo: any) => {
          const res = await fetch(
            `https://api.github.com/repos/kametsun/${repo.name}/commits?since=${yesterdayString}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const commitData = await res.json();
          totalCount += await commitData.length;
          setTotalCommits(totalCount);
        });

        setTotalCommits(totalCount);
      } catch (e) {
        // TODO
        console.log(e);
      }
    };

    fetchRepositoryNames();
  }, []);

  return (
    <Box>
      <Heading size={"md"}>Today's Total Commits: {totalCommits}</Heading>
    </Box>
  );
};

export default GithubCommits;
