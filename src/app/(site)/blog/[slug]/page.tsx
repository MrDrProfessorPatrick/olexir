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
        include: { blocks: true },
    })

    if (!post) {
        notFound()
    }
    const postId = post.id
    console.log('POST', post)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                {true && (
                    <BlogEditor
                        postId={postId}
                        blocks={post.blocks as PrismaPostBlock[]}
                    />
                )}
                <div className="flex">BLOG CONTENT</div>
            </div>
        </>
    )
}
