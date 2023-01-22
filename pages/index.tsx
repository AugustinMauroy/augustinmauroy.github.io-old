import Link from 'next/link';
import style from '../styles/index.module.css';

export default function Home() {
  return (
  <>
  <article className={style.main}>
    <div className={style.presentation}>
        <img src='me.jpeg'></img>
        <div>
        <h1>Augustin Mauroy</h1>
        <p>Hi 👋 I'm Augustin. I'm 16 year old. I'm full stack web dev.</p>
        <Link href='/about/'>Read more about me</Link>
        </div>
      </div>
      <div className={style.social}>
        <div>
          <h2>Github</h2>
          <p>You can found my Github account. You can find my projects and the projects I have contributed to.</p>
          <Link href='https://github.com/augustinmauroy' target='_blank'>Look up my github Account</Link>
        </div>
        <div>
          <h2>Twitter</h2>
          <p>In my Twitter account you can found some communication</p>
          <Link href='https://twitter.com/_August1_' target='_blank'>Look up my twitter Account</Link>
        </div>
      </div>
    </article>
    </>
  )
}
