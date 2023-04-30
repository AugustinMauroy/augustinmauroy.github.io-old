import Link from 'next/link';
import styles from './index.module.scss';

export default function Header({ className }: { className?: string }) {
    const classes = [styles.container, className].join(' ');
    return (
        <header className={classes}>
            <div>
                <Link href="/">Augustin M.</Link>
            </div>
            <div className={styles.right}>
                <Link href="/about">About Me</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </header>
    );
}
