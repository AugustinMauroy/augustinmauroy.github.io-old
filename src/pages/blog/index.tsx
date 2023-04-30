import BlogCard from '@/components/Article/BlogCard';
import { getAllPosts } from '@/lib/post';
import styles from '@/styles/pages/blog.module.scss';

export default function PageBlog({ allPosts }: any) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <div className={styles.container}>
            <h1>Blog</h1>
            {heroPost && (
                <>
                    <h2>Last post</h2>
                    <BlogCard
                        title={heroPost.title}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        thumbnail={heroPost.thumbnail}
                    />
                </>
            )}
            {morePosts.length > 0 && (
                <>
                    <h2>More Posts</h2>
                    <div className={styles.cardList}>
                        {morePosts.map((post: any) => (
                            <BlogCard
                                key={post.slug}
                                title={post.title}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                                thumbnail={post.thumbnail}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'author',
        'slug',
        'thumbnail',
    ]);

    return {
        props: { allPosts },
    };
}
