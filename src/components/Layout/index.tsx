import { Open_Sans } from 'next/font/google';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';
import styles from './index.module.scss';

const font = Open_Sans({
    subsets: ['latin'],
});

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const classes = [styles.container, font.className].join(' ');
    return (
        <div className={classes}>
            <Header className={styles.header} />
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer} />
        </div>
    );
}
