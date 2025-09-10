import Call from "@/assets/icons/contacts/icon-phone.svg";
import Whatsapp from "@/assets/icons/contacts/whatsapp-logo.svg";
import Telegram from "@/assets/icons/contacts/telegram-logo.svg";
import Mail from "@/assets/icons/contacts/icon-mail.svg";
import { useTranslation } from "react-i18next";
import styles from "./contactsContent.module.scss";

export default function ContactsContent() {
	const { t } = useTranslation();

	return (
		<div className={styles.contactsContent}>
			<address>
				<a href="tel:+77009009798" target="_blank" rel="noopener noreferrer">
					<img src={Call} /> +7 700 900 97 98
				</a>

				<a
					href="https://wa.me/+77009009798"
					target="_blank"
					rel="noopener noreferrer">
					<img src={Whatsapp} /> {t("contactsPage.whatsUp")}
				</a>

				<a
					href="https://t.me/info_offiwebsite"
					target="_blank"
					rel="noopener noreferrer">
					<img src={Telegram} /> {t("contactsPage.telegram")}
				</a>

				<a
					href="mailto:info@offiwebsite.com"
					target="_blank"
					rel="noopener noreferrer">
					<img src={Mail} /> info@offiwebsite.com
				</a>
			</address>
		</div>
	);
}
