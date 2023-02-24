import Styles from '../../styles/layout.module.css';

export default function footer(): JSX.Element {
    const date = (startingDate: number): String  => {
        const date = new Date();
        const year = date.getFullYear();
        if(startingDate > year) return `${year} - ${startingDate}`;
        return year.toString();
    };

    return(
    <footer  className={Styles.footer}>
        <p>MIT License copyright © {date(2023)} Augustin Mauroy</p>
    </footer>
    );
};
