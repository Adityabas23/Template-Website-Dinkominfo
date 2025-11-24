import Link from "next/link";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export default function ButtonLink({
  href,
  children,
  size = "md",
  fullWidth = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[size]} ${
        fullWidth ? styles.full : ""
      }`}
    >
      {children}
    </Link>
  );
}
