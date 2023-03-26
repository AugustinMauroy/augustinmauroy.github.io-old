import Link from 'next/link';
import styles from './index.module.scss';

export type LayoutProps = {
    children: React.ReactNode;
};

const date = (startingDate: number): String => {
    const date = new Date();
    const year = date.getFullYear();
    if (startingDate > year) return `${year} - ${startingDate}`;
    return year.toString();
};

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={styles.layout}>
            <nav className={styles.header}>
                <strong>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                </strong>
                <Link href="/about" className={styles.link}>
                    About
                </Link>
                <Link href="/projects" className={styles.link}>
                    Projects
                </Link>
            </nav>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>MIT License copyright © {date(2023)} Augustin Mauroy</p>
            </footer>
        </div>
    );
}
