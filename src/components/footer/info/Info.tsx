import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./info.module.scss";
function Info() {
	const { t } = useTranslation();

	return (
		<div className={styles.infoContainer}>
			<Link to="/public-offer-agreement">{t("footer.public-offer")}</Link>
			<Link to="/privacy">{t("footer.privacy")}</Link>
		</div>
	);
}

export default Info;
