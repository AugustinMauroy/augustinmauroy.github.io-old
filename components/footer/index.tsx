import style from '../../styles/layout.module.css';

export default function footer(){
    const date = (startingDate: number): String  => {
        const date = new Date();
        const year = date.getFullYear();
        if(startingDate > year){
            return `${year} - ${startingDate}`
        }
        return year.toString();
    };

    return(
    <footer  className={style.footer}>
        <p>Augustin Mauroy © {date(2023)}</p>
    </footer>
    )
}