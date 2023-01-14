import Link from 'next/link';
import mainStyle from '../../styles/layout.module.css';
import style from './index.module.css';

export default function header(){
    return(
    <nav className={mainStyle.header}>
            <Link href="/" className={style.link}>Home</Link>
            <Link href="/about" className={style.link}>About</Link>
            <Link href="/projects" className={style.link}>Projects</Link>
    </nav>
    )
}