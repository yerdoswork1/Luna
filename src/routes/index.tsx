import { createBrowserRouter } from "react-router-dom";
// import ConditionalLayout from "@/components/layout/ConditionalLayout";
import Layout from "@/components/layout/Layout";

// import Home from "@/pages/home-page";
// import ContactsPage from "@/pages/contactsPage/ContactsPage";
// import ServicePage from "@/components/pages/service-page/ServicePage";
// import ServiceCategoryPage from "@/pages/servicesCategoryPage/ServicesCategoryPage";
// import Privacy from "@/pages/privacy-policy/Privacy";
// import PublicOfferPage from "@/pages/public-offer/PublicOfferPage";
// import Page404 from "@/pages/page-404/Page404";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout>{/* <Home /> */}</Layout>,
	},
	// {
	// 	path: "/contacts",
	// 	element: (
	// 		<Layout>
	// 			<ContactsPage />
	// 		</Layout>
	// 	),
	// },
	// {
	// 	path: "/services/:services",
	// 	element: (
	// 		// Для этой страницы на мобильном Layout скрыт
	// 		<ConditionalLayout hideOnMobile={true}>
	// 			<ServiceCategoryPage />
	// 		</ConditionalLayout>
	// 	),
	// },
	// {
	// 	path: "/services/:services/:serviceId",
	// 	element: (
	// 		<ConditionalLayout hideOnMobile={true}>
	// 			<ServicePage />
	// 		</ConditionalLayout>
	// 	),
	// },
	// {
	// 	path: "/privacy",
	// 	element: (
	// 		<Layout>
	// 			<Privacy />
	// 		</Layout>
	// 	),
	// },
	// {
	// 	path: "/public-offer-agreement",
	// 	element: (
	// 		<Layout>
	// 			<PublicOfferPage />
	// 		</Layout>
	// 	),
	// },
	// {
	// 	path: "*",
	// 	element: <Page404 />,
	// },
]);
