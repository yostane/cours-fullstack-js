import {Message} from "@huggingface/transformers";

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module"
});

worker.addEventListener("message", (e) => {
  switch (e.data.status) {
    case "loading":
      console.log("loading...", e.data.data);
      break;
    case "ready":
      console.log("model ready", e.data);
      break;
    case "progress":
      document.querySelector<HTMLDivElement>('#loading_text')!.innerHTML = e.data.progress;
      break;
    case "complete":
      console.log("model complete", e.data);
      break;
    case "update":
      console.log("got update", e.data);
      break;
    case "start":
      console.log("start inferring", e.data);
      break;
    case "error":
      console.error("got error", e.data);
      break;
  }
});
worker.addEventListener("error", (e) => {
  console.error("Error", e);
});

console.log("checking and loading worker")
worker.postMessage({type: "load"});

export function checkMmdel() {
  worker.postMessage({type: "check"});
}

export function promptModel(messages: Message[]) {
  worker.postMessage({type: "generate", data: messages});
}