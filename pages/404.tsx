import Link from 'next/link';
import error404 from '../components/404/index';
import style from '../styles/404.module.css';

export default function error(): JSX.Element {
  return (
      <>
        <div className={style.box}>
          <div>
          <h1>Error | 404</h1>
            <Link href="/">Go to home page</Link>
          </div>
          {error404()}
        </div>
      </>
  );
}
