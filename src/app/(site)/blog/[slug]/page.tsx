import { auth } from '@clerk/nextjs/server'
import prisma from '../../../lib/prisma'
import BlogEditor from '../../../../components/BlogEditor'

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function Blog({ params }: BlogPageProps) {
    const { userId } = await auth()
    const { slug } = await params
    const post = await prisma.post.findUnique({
        where: { slug: slug },
    })
    console.log('post', post)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                {true && <BlogEditor />}
                <div className="flex">BLOG CONTENT</div>
            </div>
        </>
    )
}
