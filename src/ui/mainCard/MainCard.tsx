import LinkToIconComponent from "@/ui/linkToIconComponent/LinkToIconComponent";
import { IServiceCard } from "@/pages/home/services/cardInfo";
import { useTranslation } from "react-i18next";
import styles from "./MainCard.module.scss";

interface IMainCardProps extends IServiceCard {
	className?: string;
}

const MainCard: React.FC<IMainCardProps> = ({
	id,
	name,
	image,
	dscr,
	className,
}) => {
	const { t } = useTranslation();

	return (
		<div
			className={`
                ${className}
            ${styles.card}`}>
			{image && <img src={image} alt={name} className={styles.fullWidth} />}
			<div>
				<p className={styles.cardText}>
					{t(`home-page.direction-carousel-section.${name}`)}
				</p>
			</div>
			<div className={styles.cardContainer}>
				{dscr && <p className={styles.priceBlock}>{dscr}</p>}
				<LinkToIconComponent href={`services/${id}`} />
			</div>
		</div>
	);
};

export default MainCard;
