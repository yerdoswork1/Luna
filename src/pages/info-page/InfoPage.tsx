import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./infoPage.module.scss";
function Info() {
	const { t } = useTranslation();

	return (
		<div className={styles.infoContainer}>
			<h2 className={styles.title}>{t("info.title")}</h2>
			<Link className={styles.linkInfo} to="/public-offer-agreement">
				{t("info.public-offer")}
			</Link>
			<Link className={styles.linkInfo} to="/privacy">
				{t("info.privacy")}
			</Link>
			<Link className={styles.linkInfo} to="#">
				{t("info.corporate")}
			</Link>
		</div>
	);
}

export default Info;
