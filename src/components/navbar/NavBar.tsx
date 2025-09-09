import { Link, useLocation } from "react-router-dom";
import { BookOpen, Phone, BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./navbar.module.scss";
import { ComponentType } from "react";

type NavItem = {
	label: string;
	to?: string;
	icon: ComponentType<{ className?: string }>;
	expandable?: boolean;
};

const navItems: NavItem[] = [
	{ to: "/", label: "home", icon: BookOpen },
  { to: "/info", label: "info", icon: BadgeCheck },
	{ to: "/contacts", label: "contacts", icon: Phone },
];

const Navbar = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const { t } = useTranslation();

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navItems.map(({ to, label, icon: Icon }) => {
					if (!to) return null;
					const isActive = pathname === to;

					return (
						<li key={to}>
							<Link
								to={to}
								className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
								<Icon
									className={`${styles.imgNav} ${
										isActive ? styles.iconActive : ""
									}`}
								/>
								<span
									className={`${styles.navText} ${
										isActive ? styles.highlight : ""
									}`}>
									{t(`navbar.${label}`)}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
