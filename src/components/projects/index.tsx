import Link from 'next/link';
import styles from './index.module.scss';

type ProjectsProps = {
    title: string;
    description: string;
    whatIHaveDone: string;
    link: string;
    img?: string;
};

export default function Projects({
    title,
    description,
    whatIHaveDone,
    img,
    link,
}: ProjectsProps) {
    return (
        <div className={styles.project}>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{whatIHaveDone}</p>
                <Link href={link} />
            </div>
            {img ? <img src={img} alt={title} /> : null}
        </div>
    );
}
