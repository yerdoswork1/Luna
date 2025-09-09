// ConditionalLayout.tsx
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import Layout from "./Layout";
import Logo from "@/assets/header-logo.svg";
import HomeBtn from "@/assets/x.svg";
import Location from "@/assets/icons/location.svg";
import styles from "./ConditionalLayout.module.scss";

interface ConditionalLayoutProps {
	children: ReactNode;
	hideOnMobile?: boolean;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({
	children,
	hideOnMobile = false,
}) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	if (hideOnMobile && isMobile) {
		return (
			<div className={styles.mobileWrapper}>
				{/* мобильный хедер */}
				<div className={styles.headerContainer}>
					<div className={styles.logoContainer}>
						<img src={Logo} alt="logo" className={styles.logo} />
					</div>
					<div className={styles.btnContainer}>
						<img src={Location} alt="location" />
						<p>Дубай</p>
						<a className={styles.btnLink} href="/">
							<img src={HomeBtn} alt="home" className={styles.homeBtn} />
						</a>
					</div>
				</div>

				{/* тут будет страница без layout */}
				<main>{children}</main>
			</div>
		);
	}

	// обычный layout (десктоп или страницы без hideOnMobile)
	return <Layout>{children}</Layout>;
};

export default ConditionalLayout;
