import mainStyle from '../styles/layout.module.css';
import style from '../styles/index.module.css';
import Link from 'next/link';

/**
 * 
 * @todo: improve the small about me
 * @todo: add a github section
 * @todo: add a twitter section
 * @todo: add a picture of me
 */
export default function Home() {
  return (
    <main className={mainStyle.main}>
      <div className={style.presentation}>
        <img src='placeholder-img.png'></img>
        <div>
        <h1>Augustin Mauroy</h1>
        <p>Hi 👋 I'm Augustin. I'm 16 year old.</p>
        <Link href='/about/'>Read more about me</Link>
        </div>
      </div>
      <hr></hr>
      <div>
        <div>
          <h2>Github</h2>
          <p>Text about my github</p>
        </div>
        <div>
          <h2>Twitter</h2>
        </div>
      </div>
    </main>
  )
}
