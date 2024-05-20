import { Container, Flex, Textarea } from "@yamada-ui/react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
  padding: string;
  isInvalid: boolean;
  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

function MarkdownEditor(props: Props) {
  return (
    <Flex p={props.padding}>
      <Textarea
        placeholder="エディター"
        width={"50%"}
        height={"600px"}
        onChange={props.handleChange}
        value={props.text}
        border={"thick double"}
        m={"1"}
        isInvalid={props.isInvalid}
      />
      <Container width={"50%"} height="600px" m="1" overflow={"auto"}>
        <ReactMarkdown className={"markdown"}>{props.text}</ReactMarkdown>
      </Container>
    </Flex>
  );
}

export default MarkdownEditor;
