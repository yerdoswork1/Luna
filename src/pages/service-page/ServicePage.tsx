import { services } from "@/consts";
import BreadcrumbComponent from "@/ui/breadcrumbComponent/BreadcrumdComponent";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import BackButton from "@/assets/icons/back_button_mobile.svg";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";
import styles from "./servicePage.module.scss";
import { useMediaQuery } from "react-responsive";

export default function ServicePage() {
	const { services: serviceCategoryId, serviceId } = useParams<{
		services: string;
		serviceId: string;
	}>();

	const navigate = useNavigate();
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const serviceCategory = services.find(
		(category) => category.id === serviceCategoryId
	);
	const serviceInfo = serviceCategory?.items?.find(
		(service) => service.id === serviceId
	);

	const { t } = useTranslation("common");

	if (!serviceInfo || !serviceCategory) return <Navigate to="/services" />;

	const breadCrumbList = [
		{
			link: `/services/${serviceCategoryId}`,
			name: t(`services.${serviceInfo.id}.name`),
			lastItem: true,
		},
	];

	return (
		<div className={styles.servicePage}>
			{!isMobile && <BreadcrumbComponent links={breadCrumbList} />}

			<div className={styles.container}>
				<button
					onClick={() => navigate(`/services/${serviceCategoryId}`)}
					className={styles.backBtn}>
					<img src={BackButton} alt="back" className="w-full" />
				</button>

				{/* картинка */}
				<div className={styles.imageWrapper}>
					{serviceInfo?.image && (
						<img
							src={serviceInfo.image}
							alt=""
							className="h-full object-cover rounded-xl"
						/>
					)}
				</div>

				{/* описание */}
				<div className={styles.info}>
					<div className={styles.textBlock}>
						<h1 className={styles.title}>{t(`services.${serviceId}.name`)}</h1>

						<p className={styles.description}>
							{t(`services.${serviceId}.desc-1`)}
						</p>

						{i18n.exists(
							`services.${serviceCategoryId}.${serviceId}.desc-2`
						) && (
							<p className={styles.description}>
								{t(`services.${serviceCategoryId}.${serviceId}.desc-2`)}
							</p>
						)}
					</div>

					<button className={styles.button}>
						{t("services.text-whatsapp")}
					</button>
				</div>
			</div>
		</div>
	);
}
