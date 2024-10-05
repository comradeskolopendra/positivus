import { createRoot } from "react-dom/client";
import App from "./app/app";

import "./index.scss";
import { spy } from "mobx";

// spy((event) => {
//     if (event.type.includes("action")) {
//         console.log(event);
//     }
// })

const root = document.getElementById("root");
const container = createRoot(root);

container.render(<App />);