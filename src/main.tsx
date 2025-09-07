import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { MotionProvider } from "./utils/motion/MotionProvider";
import { RouterProvider } from "react-router";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MotionProvider>
			<RouterProvider router={router}></RouterProvider>
		</MotionProvider>
	</StrictMode>
);
