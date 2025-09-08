"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/ui/breadCrumb/breadCrumb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./breadcrumbComponent.module.scss";

export interface BreadcrumbListItem {
	link: string;
	name: string;
	lastItem?: boolean;
}

interface Props {
	links?: BreadcrumbListItem[];
}

export default function BreadcrumbComponent({ links }: Props) {
	const { t } = useTranslation();

	return (
		<div className={styles.breadcrumbWrapper}>
			<Breadcrumb className={styles.breadcrumb}>
				<BreadcrumbList className={styles.breadcrumbList}>
					<BreadcrumbItem className={styles.breadcrumbItem}>
						<BreadcrumbLink asChild className={styles.breadcrumbLink}>
							<Link to="/">{t("navbar.home")}</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>

					{links?.map((item, i) => (
						<BreadcrumbItem
							key={`bread-${i}`}
							className={styles.breadcrumbItem}>
							<BreadcrumbSeparator className={styles.breadcrumbSeparator} />
							<BreadcrumbLink
								asChild
								className={`${styles.breadcrumbLink} ${item.lastItem ? styles.lastItem : ""}`}>
								<Link to={item.link}>{item.name}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
}
