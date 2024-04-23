import {
  Center,
  Container,
  Flex,
  FlexProps,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@yamada-ui/react";
import { ReactElement } from "react";
import MyPicture from "@kametsun/assets/MY_PICTURE.jpeg";

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

  return (
    <Container centerContent>
      <Flex alignItems={"center"} direction={flexBreakPoint}>
        <Image src={MyPicture} size={"64"} margin={"2"} />
        <Container>
          {isMobile ? (
            <Center>
              <Heading size={"md"}>Tsubasa Kamekubo</Heading>
            </Center>
          ) : (
            <Heading size={"md"}>Tsubasa Kamekubo</Heading>
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
        </Container>
      </Flex>
    </Container>
  );
}

export default Profile;
