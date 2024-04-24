import {
  Center,
  Container,
  Flex,
  FlexProps,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@yamada-ui/react";
import { ReactElement } from "react";
import MyPicture from "@kametsun/assets/MY_PICTURE.jpeg";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Profile(): ReactElement {
  const flexBreakPoint = useBreakpointValue<FlexProps["direction"]>({
    base: "row",
    md: "column",
    sm: "column",
  });

  const isMobile = useBreakpointValue({
    base: false,
    md: true,
    sm: true,
  });

  const linkStyles = {
    _hover: {
      color: "blue.500",
    },
  };

  return (
    <Container centerContent>
      <Flex alignItems={"center"} direction={flexBreakPoint}>
        <Image src={MyPicture} size={"72"} margin={"1"} />
        <Container>
          {isMobile ? (
            <Center>
              <Heading size={"lg"}>Tsubasa Kamekubo</Heading>
            </Center>
          ) : (
            <Heading size={"lg"}>Tsubasa Kamekubo</Heading>
          )}
          <Text>
            相川学園静清高等学校卒業<br></br>
            帝京大学理工学部情報科学科 通信教育課程 3年<br></br>
            静岡産業技術専門学校 みらい情報科 3年<br></br>
            <br></br>
            座右の銘は「負けん気」と「義理人情」。感謝を忘れず、熱い心で挑戦する。
            <br></br>
            幼少期からバレーボールに熱中し、全国大会に3度出場。最高実績は全国ベスト8。
            <br></br>
            そして、エンジニアになるため進学しIT分野を専攻中。
          </Text>
          <Flex justify={"end"}>
            <Link as={"a"} href="https://github.com/kametsun" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size={"2xl"}
                mx={"1"}
                color={"blackAlpha.950"}
                sx={linkStyles}
              />
            </Link>
            <Link
              as={"a"}
              href="https://twitter.com/_kametsun_"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                size={"2xl"}
                mx={"1"}
                color={"blackAlpha.950"}
                sx={linkStyles}
              />
            </Link>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
}

export default Profile;
