import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import AuthorList from '@/components/Article/AuthorList';
import { getAllPosts, getPostBySlug } from '@/lib/post';
import styles from '@/styles/pages/article.module.scss';

export default function PageBlog({ post }: any): JSX.Element {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={post.thumbnail} />
                <meta property="og:image:alt" content={post.title} />
                <meta
                    property="og:article:published_time"
                    content={post.date}
                />
                <meta property="og:article:author" content={post.author} />
            </Head>
            <div className={styles.container}>
                <h1>{post.title}</h1>
                <p>
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>

                <AuthorList authors={post.author} />
                <MDXRemote {...post.content} />
            </div>
        </>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'author',
        'content',
        'description',
        'thumbnail',
    ]);

    const content = await serialize(post.content);

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
