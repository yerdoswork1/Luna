import LogoIcon from "@/assets/header-logo.svg";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
	return (
		<Link to="/" className={styles.link}>
			<img className={styles.responsive} src={LogoIcon} alt="Luna" />
		</Link>
	);
};

export default Logo;
