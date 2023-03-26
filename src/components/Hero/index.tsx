import styles from './index.module.scss';

export type HeroProps = {
    children: React.ReactNode;
};

export default function Hero({ children }: HeroProps): JSX.Element {
    return <div className={styles.hero}>{children}</div>;
}
