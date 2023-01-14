import Link from 'next/link';
import error404 from '../components/404/index';
import style from '../styles/layout.module.css';


export default () => {
  return (
    <main className={style.main}>
      <div>
        <h1>Error | 404</h1>
        <Link href="/">Go to home page</Link>
        <br/>
        {error404()}
      </div>
    </main>
  )
}
