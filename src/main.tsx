import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionProvider } from "./utils/motion/MotionProvider";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MotionProvider>
			
		</MotionProvider>
	</StrictMode>
);
