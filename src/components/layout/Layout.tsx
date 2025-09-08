import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

interface LayoutProps {
	hideOnMobile?: boolean;
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ hideOnMobile = false, children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const shouldHide = hideOnMobile && isMobile;

	return (
		<>
			{!shouldHide && <Header />}
			<main>
				<div className={styles.layout}>
					<div className={styles.container}>{children || <Outlet />}</div>
				</div>
			</main>
			{!shouldHide && <Footer />}

			{/* {!shouldHide && <Navbar />} */}
		</>
	);
};

export default Layout;
