import Link from 'next/link';
import styles from '@/styles/pages/404.module.scss';

export default function Page404(): JSX.Element {
    return (
        <div className={styles.container}>
            <h1>404: Not Found</h1>
            <Link href="/">Back to Home</Link>
        </div>
    );
}
