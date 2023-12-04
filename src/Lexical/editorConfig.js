import { EmojiNode } from "./EmojiNode";
import ExampleTheme from "./ExampleTheme";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [EmojiNode],
};

export default editorConfig;
