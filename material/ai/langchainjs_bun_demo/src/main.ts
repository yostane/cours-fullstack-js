import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash-8b",
  maxOutputTokens: 2048,
});

// Batch and stream are also supported
const res = await model.invoke([
  [
    "human",
    "What would be a good company name for a company that makes colorful socks?",
  ],
]);

console.log(res);
