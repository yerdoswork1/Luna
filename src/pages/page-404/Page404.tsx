import { ROUTES } from "@/config/routes";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Page404.module.scss";

const Page404 = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h1 className={styles.errorCode}>404</h1>
				<h2 className={styles.title}>{t("404.title")}</h2>
				<p className={styles.description}>{t("404.description")}</p>
				<Link to={ROUTES.home} className={styles.link}>
					{t("404.link")}
				</Link>
			</div>
		</div>
	);
};

export default Page404;
