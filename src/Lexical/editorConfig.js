import { EmojiNode } from "./EmojiNode";
import ExampleTheme from "./ExampleTheme";

const fixedText = localStorage.getItem("inputText");

const editorConfig = {
  editorState: fixedText,
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode],
};

export default editorConfig;

//    let userMemo = JSON.parse(localStorage.getItem("inputText"));
