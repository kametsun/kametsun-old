import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@yamada-ui/react";
import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

function RegisterArticle() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTitleInvalid, setIsTitleInvalid] = useState(false);
  const [isTextInvalid, setIsTextInvalid] = useState(false);

  const handleOpen = () => {
    const isTitleEmpty = !title.trim();
    const isTextEmpty = !text.trim();
    setIsTitleInvalid(isTitleEmpty);
    setIsTextInvalid(isTextEmpty);

    if (!isTitleEmpty && !isTextEmpty) {
      onOpen();
    } else {
      alert("タイトルと内容の両方を入力してください");
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    const articleData = {
      title,
      content: text,
    };

    try {
      const res = await fetch(import.meta.env.VITE_BLOG_URL + "/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!res.ok) {
        throw new Error("エラー");
      } else {
        setText("");
        setTitle("");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      border={"solid"}
      borderColor={"blackAlpha.300"}
      borderRadius={"2xl"}
      p={"4"}
    >
      <Heading p={"sm"}>記事投稿</Heading>
      <InputGroup width={"50%"} p={"sm"}>
        <Input
          value={title}
          border={"solid"}
          borderColor={"blackAlpha.300"}
          borderRadius={"base"}
          onChange={handleTitleChange}
          placeholder="Input Your blog title"
          isInvalid={isTitleInvalid}
        />
      </InputGroup>

      <MarkdownEditor
        handleChange={handleTextChange}
        text={text}
        padding="sm"
        isInvalid={isTextInvalid}
      />

      <Box display="flex" justifyContent="flex-end" mt="sm">
        <Button colorScheme="blue" onClick={handleOpen}>
          確認
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>確認</ModalHeader>

        <ModalBody>タイトル: {title}を投稿しても良いでしょうか？</ModalBody>
        <ModalFooter>
          <Button variant={"ghost"} onClick={onClose} mr={"3"}>
            閉じる
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            投稿
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
}

export default RegisterArticle;
