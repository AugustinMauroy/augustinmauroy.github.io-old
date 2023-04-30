import Projects from '../components/Projects';
import styles from '@/styles/pages/content.module.scss';

export default function PageProjects(): JSX.Element {
    return (
        <div className={styles.container}>
            <h1>My project</h1>
            <p>
                This page contains projects I have worked on or those I have
                created.
            </p>
            <Projects
                title="Nodejs.dev"
                description="A redesign of Nodejs.org built using Gatsby.js with React.js, TypeScript, and Remark."
                whatIHaveDone="I have work on design, adding feature and i18n (french) and fixing all are wrong ."
                link="https://github.com/nodejs/nodejs.dev"
            />
            <Projects
                title="Nodejs.org"
                description="The Node.js website."
                whatIHaveDone="I work on migration of redesign. I have work in I18n and i fixing some think in the website."
                link="https://github.com/nodejs/nodejs.dev"
            />
        </div>
    );
}
