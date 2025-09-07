"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Logo from "@/assets/header-logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "@/components/header/languageDropdown/LanguageDropdown";
import Russ from "@/assets/icons/russia-icon-36.svg";
import Eng from "@/assets/icons/eng-icon-36.svg";
import Kaz from "@/assets/icons/kaz-icon-36.svg";
import Location from "@/assets/icons/location.svg";

const languages = [
	{ src: Russ, name: "Русский", code: "ru" },
	{ src: Eng, name: "English", code: "en" },
	{ src: Kaz, name: "Қазақша", code: "kz" },
];

export default function Header() {
	const { t, i18n } = useTranslation("common");
	const [isLanguageOpen, setIsLanguageOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			const currentLangCode = i18n.language;
			const matchedLanguage = languages.find(
				(lang) => lang.code === currentLangCode
			);
			if (matchedLanguage) {
				setSelectedLanguage(matchedLanguage);
			}
		}
	}, [i18n.language, isClient]);

	if (!isClient || !selectedLanguage) {
		return null;
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.containerItems}>
						<div className={styles.containerLink}>
							<Logo />
							<div className={styles.linkContainer}></div>
						</div>
						<Link to="/contacts" className={styles.linkContacts}>
							{t("header.contacts")}
						</Link>
						<img src={Location} />
						<p>Дубай</p>
						<LanguageDropDown
							isOpen={isLanguageOpen}
							setIsOpen={setIsLanguageOpen}
							selectedLanguage={selectedLanguage}
							setSelectedLanguage={setSelectedLanguage}
						/>
					</div>
				</div>
			</header>
		</>
	);
}
