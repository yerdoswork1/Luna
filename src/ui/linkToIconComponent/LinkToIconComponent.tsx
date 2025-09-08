import { Link } from "react-router-dom";
import LinkToIconSrc from "@/assets/icons/link-to-icon.svg";
import styles from "./linkToIconComponent.module.scss";

type LinkToIconProps = {
	href: string;
	className?: string;
};

const LinkToIconComponent = ({ href, className }: LinkToIconProps) => {
	return (
		<Link to={href} className={className}>
			<img className={styles.icon} src={LinkToIconSrc} alt="Перейти" />
		</Link>
	);
};

export default LinkToIconComponent;
