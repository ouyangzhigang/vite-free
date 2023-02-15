import "./style.css";
// import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

const globalModules = import.meta.glob("./components/*"); // map
Object.entries(globalModules).forEach(([k, v]) => {
  console.log(k, v);
  v().then((m: any) => console.log(m.default));
});

export const render = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      hello world! <br />
      <button id="counter"></button>
      <p>${JSON.stringify(globalModules)}</p>
    </div>
  `;
};

render();

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
