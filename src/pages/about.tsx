import { FaHtml5, FaCss3, FaNodeJs, FaLanguage } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import styles from '@/styles/pages/content.module.scss';

export default function PageAbout(): JSX.Element {
    return (
        <div className={styles.container}>
            <h2>My web dev skills</h2>
            <p>
                I learned web development on my own thanks to W3school and mdn
                docs. And I also learned by doing.
            </p>
            <h3>
                <FaHtml5 /> HTML
            </h3>
            <p>
                I know an big part of html. I know the semantic, what is
                deprecated, what is new, etc.
            </p>
            <h3>
                <FaCss3 /> CSS
            </h3>
            <p>
                In CSS i can do some responsive design (size, prefer color). I
                use variables, flexbox, grid, etc. And I can use <em>SASS</em>.
            </p>
            <h3>
                <SiJavascript /> JavaScript
            </h3>
            <p>
                I love JavaScript Back-end with <em>Node.js</em>. In Front-end I
                know the basic with DOM.
                <br />
                I&apos;m familiar with <em>React.js</em>.
            </p>
            <p>I know TypeScript and I can use it in my projects.</p>
            <h3>
                <FaNodeJs /> Node.js
            </h3>
            <p>
                With Node.js I can do some Framework-less. But i also love
                Nextjs. I had work with Gatsby.I know the basic of Fastify.
            </p>
            <p>I&apos;m collaborator of Node.js</p>
            <h2>
                <FaLanguage /> My languages skills
            </h2>
            <p>
                My mother language is French. So, I can speak, read, write with
                a good level.
            </p>
            <p>
                In English I&apos;m fluent. I can speak, read and write in
                english. I&apos;m <strong>B2</strong>.
            </p>
            <p>
                In Dutch I&apos;m <strong>A2</strong>. I can read and write in
                Dutch but little bit.
            </p>
            <h2>🎓 My school formation 🏫</h2>
            <p>
                I have my CEB (Certificat d&apos;Etudes de Base) and my CE1D
                (Certificat d&apos;Etudes de 1er degré).
            </p>
            <h2>My Free-time </h2>
            <p>
                When I&apos;m not coding, I&apos;m watching some videos on
                YouTube or listen some Rammstein&apos;s music. I play video
                games in my free time.
                <br />
                I tinker with a couple of things. Like connecting the led to
                apple HomeKit.
                <br />
                In my free time I also learned video editing on Final Cut Pro X
                software.
                <br />
            </p>
        </div>
    );
}
