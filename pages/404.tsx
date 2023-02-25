import Link from 'next/link';
import error404 from '../components/404/index';
import Styles from '../styles/404.module.scss';

export default function error(): JSX.Element {
  return (
      <>
        <div className={Styles.box}>
          <div>
          <h1>Error | 404</h1>
            <Link href="/">Go to home page</Link>
          </div>
          {error404()}
        </div>
      </>
  );
};
