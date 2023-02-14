import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Me from '../components/me';
import style from '../styles/index.module.css';

export default function Home() {
  return (
  <>
  <div className={style.main}>
    <div className={style.presentation}>
        <Me />
        <div>
        <h1>Augustin Mauroy</h1>
        <p>Hi 👋 I&apos;m Augustin. I&apos;m 16 year old. I&apos;m full stack web dev.</p>
        <Link href='/about/'>Read more about me</Link>
        </div>
      </div>
      <div className={style.social}>
        <div>
          <h2><FaGithub /> Github</h2>
          <p>You can found my Github account. You can find my projects and the projects I have contributed to.</p>
          <Link href='https://github.com/augustinmauroy' target='_blank'>Look up my github Account</Link>
        </div>
        <div>
          <h2><FaTwitter /> Twitter</h2>
          <p>In my Twitter account you can find some communication.</p>
          <Link href='https://twitter.com/_August1_' target='_blank'>Look up my twitter Account</Link>
        </div>
      </div>
      <div>
        <h2>Reach me</h2>
        <p>You can reach me by email: <a href='mailto:augustin.mauroy@outlook.fr'>augustin.mauroy@outlook.fr</a></p>
      </div>
    </div>
    </>
  );
}
