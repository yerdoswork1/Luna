import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "./publicOfferPage.module.scss";

interface Section {
	title: string;
	items?: Record<string, string>;
}

interface Public {
	title: string;
	date: string;
	intro: string;
	sections: Record<string, Section>;
}

export default function PublicOfferPage() {
	const { t } = useTranslation();

	const publicOffer = t("publicOffer", { returnObjects: true }) as Public;

	return (
		<>
			<Helmet>
				<title>{publicOffer.title}</title>
				<meta name="description" content={publicOffer.intro} />
			</Helmet>

			<div className={styles.container}>
				<h1 className={styles.title}>{publicOffer.title}</h1>
				{Object.entries(publicOffer.sections).map(([key, section]) => (
					<section key={key} className={styles.section}>
						<h2 className={styles.sectionTitle}>{section.title}</h2>
						{section.items &&
							Object.values(section.items).map((item, index) => (
								<p
									key={index}
									className={styles.sectionDesc}
									dangerouslySetInnerHTML={{ __html: item }}
								/>
							))}
					</section>
				))}
			</div>
		</>
	);
}
