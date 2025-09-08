// Breadcrumb.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import styles from "./breadCrumd.module.scss";

type BreadcrumbProps = React.ComponentProps<"nav">;

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
	return (
		<nav aria-label="breadcrumb" className={styles.breadcrumb} {...props} />
	);
};

export const BreadcrumbList: React.FC<React.ComponentProps<"ol">> = ({
	children,
	...props
}) => {
	return (
		<ol className={styles.breadcrumbList} {...props}>
			{children}
		</ol>
	);
};

export const BreadcrumbItem: React.FC<React.ComponentProps<"li">> = ({
	children,
	...props
}) => {
	return (
		<li className={styles.breadcrumbItem} {...props}>
			{children}
		</li>
	);
};

export const BreadcrumbLink: React.FC<
	React.ComponentProps<"a"> & { asChild?: boolean }
> = ({ asChild, children, ...props }) => {
	const Comp = asChild ? Slot : "a";
	return (
		<Comp className={styles.breadcrumbLink} {...props}>
			{children}
		</Comp>
	);
};

export const BreadcrumbPage: React.FC<React.ComponentProps<"span">> = ({
	children,
	...props
}) => {
	return (
		<span
			className={styles.breadcrumbPage}
			role="link"
			aria-disabled="true"
			aria-current="page"
			{...props}>
			{children}
		</span>
	);
};

export const BreadcrumbSeparator: React.FC<React.ComponentProps<"span">> = ({
	children,
	...props
}) => {
	return (
		<span
			className={styles.breadcrumbSeparator}
			role="presentation"
			aria-hidden="true"
			{...props}>
			{children ?? <ChevronRight />}
		</span>
	);
};

export const BreadcrumbEllipsis: React.FC<React.ComponentProps<"span">> = (
	props
) => {
	return (
		<span
			className={styles.breadcrumbEllipsis}
			role="presentation"
			aria-hidden="true"
			{...props}>
			<MoreHorizontal />
			<span className={styles.srOnly}>More</span>
		</span>
	);
};
