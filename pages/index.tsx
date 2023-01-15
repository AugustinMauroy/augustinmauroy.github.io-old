import Link from 'next/link';
import style from '../styles/index.module.css';

/**
 * 
 * @todo: improve the small about me
 * @todo: add a github section
 * @todo: add a twitter section
 * @todo: add a picture of me
 */
export default function Home() {
  return (
  <>
    <div className={style.presentation}>
        <img src='placeholder-img.png'></img>
        <div>
        <h1>Augustin Mauroy</h1>
        <p>Hi 👋 I'm Augustin. I'm 16 year old.</p>
        <Link href='/about/'>Read more about me</Link>
        </div>
      </div>
      <div className={style.social}>
        <div>
          <h2>Github</h2>
          <p>Text about my github</p>
          <Link href='https://github.com/augustinmauroy' target='_blank'>Look up my github Account</Link>
        </div>
        <div>
          <h2>Twitter</h2>
          <p>In my Twitter account you can found some communication</p>
          <Link href='https://twitter.com/_August1_' target='_blank'>Look up my twitter Account</Link>
        </div>
      </div>
    </>
  )
}
