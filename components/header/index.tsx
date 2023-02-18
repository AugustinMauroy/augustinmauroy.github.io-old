import Link from 'next/link';
import mainStyle from '../../styles/layout.module.css';
import Styles from './index.module.css';

export default function header(): JSX.Element {
    return(
    <nav className={mainStyle.header}>
            <strong><Link href="/" className={Styles.link}>Home</Link></strong>
            <Link href="/about" className={Styles.link}>About</Link>
            <Link href="/projects" className={Styles.link}>Projects</Link>
    </nav>
    );
};
