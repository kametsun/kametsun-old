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

        const today = new Date().toISOString().slice(0, 10);
        const promises = data.map(async (repo: any) => {
          console.log(
            `https://api.github.com/repos/kametsun/${repo.name}/commits?since=${today}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const commitRes = await fetch(
            `https://api.github.com/repos/kametsun/${repo.name}/commits?since=${today}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const commitData = await commitRes.json();
          return commitData.length;
        });

        const counts = await Promise.all(promises);
        const totalCount = counts.reduce((acc, cur) => acc + cur, 0);
        setTotalCommits(totalCount);
      } catch (e) {
        // TODO
        console.log(e);
      }
    };

    fetchRepositoryNames();
  }, []);

  return (
    <div>
      <h2>Today's Total Commits: {totalCommits}</h2>
    </div>
  );
};

export default GithubCommits;
