import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/index.module.css';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
  <>
  <article className={style.main}>
    <div className={style.presentation}>
        <Image src='/me.jpeg' alt='an profile picture' width={200} height={200}/>
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
          <p>In my Twitter account you can found some communication</p>
          <Link href='https://twitter.com/_August1_' target='_blank'>Look up my twitter Account</Link>
        </div>
      </div>
    </article>
    </>
  )
}
