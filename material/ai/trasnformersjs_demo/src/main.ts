import './style.css';
import {checkMmdel, promptModel} from './helper';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p id="loading_text"></p>
    <button id="prompt_button">Send Prompt</button>
    <button id="check_button">Check</button>
  </div>
`

console.log("Webgpu available ?", navigator.gpu)

document.querySelector<HTMLDivElement>('#prompt_button')!.addEventListener("click", () => {
  console.log("clicked");
  promptModel([
    {
      role: "user",
      content: "Hello, how are you ?",
    }
  ]);
})

document.querySelector<HTMLDivElement>('#check_button')!.addEventListener("click", () => {
  console.log("clicked");
  checkMmdel();
})
