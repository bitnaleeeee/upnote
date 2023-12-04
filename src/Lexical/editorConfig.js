import { EmojiNode } from "./EmojiNode";
import ExampleTheme from "./ExampleTheme";

let test = localStorage.getItem("inputText");
const editorConfig = {
  editorState: test,
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode],
};

export default editorConfig;

//    let userMemo = JSON.parse(localStorage.getItem("inputText"));
