import heroSectionImg from "@/assets/hero-section-img.png";
import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
	const { t } = useTranslation();

	return (
		<div className={styles.heroSection}>
			<div className={styles.heroSectionContent}>
				<h2 className={styles.heroSectionTitle}>
					{t("home-page.hero-section.title")}
					<span className={styles.heroSectionTitleBlack}>
						{t("home-page.hero-section.in-ease")}
					</span>
				</h2>

				<p className={styles.heroSectionSubtitle}>
					{t("home-page.hero-section.subtitle")}
				</p>
				<p className={styles.heroSectionSubtitleShort}>
					{t("home-page.hero-section.subtitle-short")}
				</p>
				<button className={styles.heroSectionButton}>
					{t("home-page.hero-section.whatsapp")}
				</button>
			</div>

			<div className={styles.heroSectionImageBlock}>
				<img
					src={heroSectionImg}
					alt="Изучите китайский язык в легкости"
					className={styles.heroSectionImage}
				/>
			</div>
		</div>
	);
}
