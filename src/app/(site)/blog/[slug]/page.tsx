import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import prisma from '../../../lib/prisma'
import BlogEditor from '../../../../components/BlogEditor/BlogEditor'
import { type PostBlock as PrismaPostBlock } from '../../../../generated/prisma/client'

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function Blog({ params }: BlogPageProps) {
    const { userId } = await auth()
    const { slug } = await params
    const post = await prisma.post.findUnique({
        where: { slug: slug },
        include: {
            blocks: {
                orderBy: {
                    position: 'asc',
                },
            },
        },
    })

    if (!post) {
        notFound()
    }
    const postId = post.id
    const postTitle = post.title || ''

    return (
        <div className="relative text-white flex flex-col items-center justify-center pt-26">
            {true && (
                <BlogEditor
                    postTitle={postTitle}
                    postId={postId}
                    blocks={post.blocks as PrismaPostBlock[]}
                />
            )}
            <div className="flex">BLOG CONTENT</div>
        </div>
    )
}
