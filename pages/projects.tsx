import Projects from '../components/projects/Index';

export default function ProjectsPage(): JSX.Element {
    return (
        <>
            <h1>My project</h1>
            <p>This page contains projects I have worked on or those I have created.</p>
            <Projects>
                {{
                    title: 'Nodejs.dev',
                    description: 'A redesign of Nodejs.org built using Gatsby.js with React.js, TypeScript, and Remark.',
                    whatIHaveDone: 'I have work on desing, adding feature and i18n (french) and fixing all are wrong .',
                    link: 'nodejs/nodejs.dev',
                    url: 'https://github.com/nodejs/nodejs.dev',
                    img: '/nodejs-dev.png'
                }}
            </Projects>
            <Projects>
                {{
                    title: 'Nodejs.org',
                    description: 'The Node.js website.',
                    whatIHaveDone: 'I have work in I18n and i fixing some think in the website.',
                    link: 'nodejs/nodejs.org',
                    url: 'htps://github.com/nodejs/nodejs.org'
                }}
            </Projects>
        </>
    );
}