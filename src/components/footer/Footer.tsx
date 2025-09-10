import Info from "@/components/footer/info/Info";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<div className={styles.containerContent}>
				<div className={styles.footerText}>
					<p className={styles.footerDscr}>
						© 2016-2025, Luna. {t("footer.all-rights-reserved")}.
					</p>
					<a href="https://aqmaral.offiwebsite.com">{t("footer.corporate")}</a>
				</div>
				<Info />
			</div>
		</footer>
	);
}

export default Footer;
