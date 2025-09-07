import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { MotionProvider } from "./utils/motion/MotionProvider";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "./utils/i18n";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Suspense fallback={<div>Loading...</div>}>
				<MotionProvider>
					<RouterProvider router={router}></RouterProvider>
				</MotionProvider>
			</Suspense>
		</HelmetProvider>
	</StrictMode>
);
