import { useTranslation } from "react-i18next";
// import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet-async";

import BreadcrumbComponent from "@/ui/breadcrumbComponent/BreadcrumdComponent";
import ContactsContent from "@/components/pages/contacts-page/contactsContent/ContactsContent";

import styles from "./contactsPage.module.scss";
import { ROUTES } from "@/config/routes";

export default function ContactPage() {
	const { t } = useTranslation();
	// const isMobile = useMediaQuery({ maxWidth: 768 });

	return (
		<>
			<Helmet>
				<title>SkillShift</title>
				<meta name="description" content={t("contactsPage.meta.description")} />
			</Helmet>

			<div className={styles.contactPage}>
				<BreadcrumbComponent
					links={[
						{
							link: ROUTES.contacts,
							name: t("navbar.contacts"),
							lastItem: true,
						},
					]}
				/>
				<div className={styles.contentWrapper}>
					<section>
						<h2>{t("contactsPage.title")}</h2>
						<ContactsContent />
					</section>
				</div>
			</div>
		</>
	);
}
