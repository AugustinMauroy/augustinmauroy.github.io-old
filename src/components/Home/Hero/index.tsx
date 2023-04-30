import HeroImage from './HeroImage';
import styles from './index.module.scss';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <HeroImage />
            <div className={styles.content}>
                <h1>I&apos;m Augustin Mauroy</h1>
                <p>
                    Hi 👋 I&apos;m Augustin. I&apos;m 16-year-old. I&apos;m full
                    stack web dev.
                </p>
            </div>
        </div>
    );
}
