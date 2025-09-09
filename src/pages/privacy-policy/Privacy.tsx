import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "./privacy.module.scss";

interface Section {
	title: string;
	items?: Record<string, string>;
}

interface Privacy {
	title: string;
	date: string;
	intro: string;
	sections: Record<string, Section>;
}

export default function PrivacyPolicyPage() {
	const { t } = useTranslation();

	const privacy = t("privacy", { returnObjects: true }) as Privacy;

	return (
		<>
			<Helmet>
				<title>{privacy.title}</title>
				<meta name="description" content={privacy.intro} />
			</Helmet>

			<div className={styles.container}>
				<h1 className={styles.title}>{privacy.title}</h1>
				<div>
					<p className={styles.date}>{privacy.date}</p>
					<p
						className={styles.sectionDesc}
						dangerouslySetInnerHTML={{ __html: privacy.intro }}
					/>
				</div>
				{Object.entries(privacy.sections).map(([key, section]) => (
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
