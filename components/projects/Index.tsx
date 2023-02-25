import Link from "next/link";
import Styles from "./index.module.scss";

type TypeProjects = {
    children: {
        title: string;
        description: string;
        whatIHaveDone: string;
        link: string;
        url: string;
        img?: string;
    };
};

export default function Projects({ children }: TypeProjects): JSX.Element{
    return (
        <div className={Styles.project}>
            <div className={Styles.text}>
            <h2>{children.title}</h2>
            <p>{children.description}</p>
            <p>{children.whatIHaveDone}</p>
            <Link href={children.link} />
            </div>
            {children.img? <img src={children.img} alt={children.title} /> : null}
        </div>
    );
};

