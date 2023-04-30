import Link from 'next/link';
import { FaGithub, FaTwitter, FaTwitch, FaMastodon } from 'react-icons/fa';
import styles from './index.module.scss';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2>Find Me</h2>
            <div className={styles.socialList}>
                <Link
                    href="https://github.com/AugustinMauroy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub /> AugustinMauroy
                </Link>
                <Link
                    href="https://twitter.com/_August1_"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter /> @_August1_
                </Link>
                <Link
                    href="https://www.twitch.tv/augustin_ma"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitch /> augustin_ma
                </Link>
                <Link
                    href="https://mastodon.social/@augustin_mauroy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaMastodon /> @augustin_mauroy@mastodon.social
                </Link>
            </div>
        </div>
    );
}
