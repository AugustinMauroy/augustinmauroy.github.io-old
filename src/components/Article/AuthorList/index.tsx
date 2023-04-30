import type { FC } from 'react';
import { authorsToArray, isToLongAuthor } from '@/lib/blog-utils';
import Author from './Author';
import styles from './index.module.scss';

type Props = {
    authors: string;
};

const AuthorList: FC<Props> = ({ authors }: Props) => {
    const authorsArray = authorsToArray(authors);
    if (authorsArray.length) {
        return (
            <div className={styles.authorList}>
                {isToLongAuthor(authors) ? (
                    <p>Article Authors</p>
                ) : (
                    <p>Article Author</p>
                )}
                <ul>
                    {authorsArray.map(author => (
                        <Author username={author} key={author} size={60} />
                    ))}
                </ul>
            </div>
        );
    }

    return null;
};

export default AuthorList;
