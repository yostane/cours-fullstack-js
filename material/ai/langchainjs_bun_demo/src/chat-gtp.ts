import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { marked } from "marked";
import TerminalRenderer from "marked-terminal";

marked.setOptions({
  renderer: new TerminalRenderer(),
});

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash-8b",
  maxOutputTokens: 2048,
});

const prompt = Bun.argv[2];
console.log(marked(`**Human**: ${prompt}`));

const res = await model.invoke([["human", prompt]]);
console.log(marked(`**AI**:`));
console.log(marked(res.content.toString()));
