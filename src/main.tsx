import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
