import heroSectionImg from "@/assets/group-of-restaurant.png";
import { useTranslation } from "react-i18next";
import styles from "./group.module.scss";

export default function Group() {
	const { t } = useTranslation();

	return (
		<section className={styles.wrapper}>
			<div className={styles.containerImage}>
				<img
					src={heroSectionImg}
					alt={t("home-page.open-your-potential.img-alt")}
					className={styles.groupImage}
				/>
			</div>

			<div className={styles.containerContent}>
				<div className={styles.containerDscr}>
					<h2 className={styles.groupSubtitle}>
						{t("home-page.open-your-potential.title")}
					</h2>
					<p className={styles.groupDescription}>
						{t("home-page.open-your-potential.subtitle")}
					</p>
				</div>

				<button type="button" className={styles.groupBtn}>
					{t("home-page.open-your-potential.whatsapp")}
				</button>
			</div>
		</section>
	);
}
