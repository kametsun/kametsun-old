import StrangeFish from "@kametsun/assets/svg/StrangeFish";
import { Heading, LinkBox, LinkOverlay } from "@yamada-ui/react";
import { useEffect, useState } from "react";

const GithubCommits = () => {
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    const fetchRepositoryNames = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/kametsun/repos`);
        const data = await res.json();

        let totalCount = 0;

        data.map(async (repo: any) => {
          // 今日のコミットにするか今までのコミットにするか悩んでる
          // const res = await fetch(
          //   `https://api.github.com/repos/kametsun/${repo.name}/commits?since=${yesterdayString}`
          // );
          const res = await fetch(
            `https://api.github.com/repos/kametsun/${repo.name}/commits`
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
    <>
      {!isNaN(totalCommits) && (
        <LinkBox
          display={"flex"}
          justifyContent={"center"}
          p={"8"}
          color={"blackAlpha.950"}
          border={"solid"}
          borderColor={"blackAlpha.300"}
          alignItems={"center"}
        >
          <LinkOverlay
            href="https://github.com/kametsun"
            target="_blank"
          ></LinkOverlay>
          <Heading size={"md"} px={"3px"}>
            Total commit of public repositories: {totalCommits}
          </Heading>
          <StrangeFish />
        </LinkBox>
      )}
    </>
  );
};

export default GithubCommits;
