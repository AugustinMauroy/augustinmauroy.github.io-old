import Link from 'next/link';
import { authorsToArray, isToLongAuthor } from '@/lib/blog-utils';
import styles from './index.module.scss';

type BlogCardProps = {
    title: string;
    date: string;
    author: string;
    thumbnail?: string;
    slug: string;
};

export default function BlogCard({
    title,
    date,
    author,
    thumbnail,
    slug,
}: BlogCardProps) {
    return (
        <div className={styles.blogCard}>
            {thumbnail ? (
                <img src={thumbnail} alt="blog-thumbnail" />
            ) : (
                <h3>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
            )}
            <div className={styles.info}>
                <p>
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <p>By: {isToLongAuthor(author) ? author + '...' : author}</p>
            </div>
        </div>
    );
}
