import styles from './index.module.scss';

export default function Footer({ className }: { className?: string }) {
    const classes = [styles.container, className].join(' ');
    return (
        <footer className={classes}>
            <p>MIT License copyright © 2023 Augustin Mauroy</p>
        </footer>
    );
}
