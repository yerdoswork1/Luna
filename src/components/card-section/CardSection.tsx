import { cards } from "@/pages/home/services/cardInfo";
import MainCard from "@/ui/mainCard/MainCard";
import { useTranslation } from "react-i18next";
import styles from "./CardSection.module.scss";

const CardSection = () => {
	const { t } = useTranslation();

	return (
		<section className={styles.carouselSection}>
			<div className={styles.carouselBlock}>
				<h3 className={styles.carouselSubtitle}>
					{t("home-page.direction-carousel-section.directions")}
				</h3>
			</div>
			<div className={styles.blockSpacing}>
				{" "}
				<div className={styles.carouselTrack}>
					{cards.map((card) => (
						<MainCard
							id={card.id}
							name={card.name}
							image={card.image}
							className={styles.mainCard}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardSection;
