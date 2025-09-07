import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./layout.module.scss";
// import Header from "../header/Header";
// import Footer from "../footer/footer/Footer";
// import Navbar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";

interface LayoutProps {
	hideOnMobile?: boolean;
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ hideOnMobile = false, children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const shouldHide = hideOnMobile && isMobile;

	return (
		<>
			{/* {!shouldHide && <Header />} */}
			<main>
				<div className={styles.layout}>
					<div className={styles.container}>{children || <Outlet />}</div>
				</div>
			</main>
			{/* {!shouldHide && <Footer />}
			{!shouldHide && <Navbar />} */}
		</>
	);
};

export default Layout;
