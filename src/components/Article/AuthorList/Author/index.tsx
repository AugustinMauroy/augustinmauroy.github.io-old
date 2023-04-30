import type { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

type AuthorProps = { username: string; size?: number };

const Author: FC<AuthorProps> = ({ username, size }) => {
    const githubUserName = username.trim();
    const githubLink = `https://github.com/${githubUserName}`;
    const githubImgLink = `https://github.com/${githubUserName}.png?size=${size}`;

    const [authorImg, setAuthorImg] = useState(githubImgLink);

    return (
        <li>
            <a
                className={styles.link}
                href={githubLink}
                key={username}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    alt={githubUserName}
                    src={authorImg}
                    placeholder="blur"
                    blurDataURL="/placeholder-img.png"
                    width={size}
                    height={size}
                    onError={() => setAuthorImg('/placeholder-img.png')}
                />
            </a>
        </li>
    );
};

export default Author;
